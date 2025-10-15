import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { uploadToCloudinary } from '../config/cloudinary';
import { sendEmail, validateRecaptcha } from './emailService';

export const submitProposal = async (formData, files = null, formType = 'services') => {
  try {
    // Validar Honeypot
    if (formData.website) {
      throw new Error('Spam detectado');
    }

    // reCAPTCHA pausado hasta deploy público
    // const recaptchaResult = await validateRecaptcha();
    // if (!recaptchaResult.success) {
    //   throw new Error('Error de verificación de seguridad');
    // }

    // Generate unique proposal ID
    const proposalId = `${formType}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    let fileUrls = [];
    
    // Upload files if any
    if (files && files.length > 0) {
      console.log('Uploading files:', files.length);
      const uploadPromises = Array.from(files).map(async (file, index) => {
        try {
          const result = await uploadToCloudinary(file, `proposals/${proposalId}`);
          
          if (result.success) {
            return {
              url: result.url,
              publicId: result.publicId,
              name: file.name,
              size: file.size,
              type: file.type
            };
          }
          return null;
        } catch (error) {
          console.error('Error uploading file:', file.name, error);
          return null;
        }
      });
      
      const results = await Promise.all(uploadPromises);
      fileUrls = results.filter(result => result !== null);
    }
    
    // Prepare proposal data based on form type
    const proposalData = {
      id: proposalId,
      formType,
      nombre: formData.name || formData.nombre,
      email: formData.email,
      telefono: formData.phone || formData.telefono || '',
      pais: formData.country || formData.pais || '',
      descripcionProyecto: formData.step_0 || formData.descripcionProyecto || '',
      createdAt: serverTimestamp(),
      referencias: fileUrls
    };
    
    // Add form-specific fields
    if (formType === 'services') {
      proposalData.estadoProyecto = formData.step_1 || '';
      proposalData.presupuesto = formData.step_2 || '';
      proposalData.tiempoEntrega = formData.step_3 || '';
      proposalData.categoria = formData.categoria || '';
    } else if (formType === 'contact') {
      proposalData.tipoProyecto = formData.tipoProyecto || '';
      proposalData.presupuesto = formData.presupuesto || '';
      proposalData.tiempoEntrega = formData.tiempoEntrega || '';
      proposalData.opcionContacto = formData.opcionContacto || '';
    }
    
    // Save to Firestore
    const docRef = await addDoc(collection(db, 'proposals'), proposalData);
    
    // Enviar email con EmailJS
    const emailResult = await sendEmail(proposalData, formType);
    
    return {
      success: true,
      id: docRef.id,
      proposalId,
      emailSent: emailResult.success
    };
    
  } catch (error) {
    console.error('Error submitting proposal:', error);
    throw new Error('Error al enviar la propuesta. Por favor, intenta nuevamente.');
  }
};

export const validateProposalData = (formData, formType = 'services') => {
  const errors = [];
  
  // Common validations
  if (!formData.name && !formData.nombre) {
    errors.push('El nombre es obligatorio');
  }
  
  if (!formData.email) {
    errors.push('El email es obligatorio');
  }
  
  if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.push('El email no es válido');
  }
  
  if (!formData.step_0 && !formData.descripcionProyecto) {
    errors.push('La descripción del proyecto es obligatoria');
  }
  
  return errors;
};

// Helper function to check Firebase connection
export const testFirebaseConnection = async () => {
  try {
    const testDoc = {
      test: true,
      timestamp: serverTimestamp()
    };
    await addDoc(collection(db, 'test'), testDoc);
    return { success: true };
  } catch (error) {
    console.error('Firebase connection test failed:', error);
    return { success: false, error: error.message };
  }
};