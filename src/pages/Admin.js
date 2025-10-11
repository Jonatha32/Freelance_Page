import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const Admin = () => {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const ADMIN_PASSWORD = 'admin123'; // Change this to a secure password

  useEffect(() => {
    if (isAuthenticated) {
      fetchProposals();
    }
  }, [isAuthenticated, filter]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const fetchProposals = async () => {
    try {
      setLoading(true);
      let q = query(collection(db, 'proposals'), orderBy('createdAt', 'desc'));
      
      if (filter !== 'all') {
        q = query(collection(db, 'proposals'), 
          where('formType', '==', filter), 
          orderBy('createdAt', 'desc')
        );
      }
      
      const querySnapshot = await getDocs(q);
      const proposalsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      }));
      
      setProposals(proposalsData);
    } catch (error) {
      console.error('Error fetching proposals:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Admin Panel
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-coral-500 text-white py-2 px-4 rounded-md hover:bg-coral-600 transition-colors"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Panel de Administración
            </h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md ${
                filter === 'all' 
                  ? 'bg-coral-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Todas ({proposals.length})
            </button>
            <button
              onClick={() => setFilter('services')}
              className={`px-4 py-2 rounded-md ${
                filter === 'services' 
                  ? 'bg-coral-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => setFilter('contact')}
              className={`px-4 py-2 rounded-md ${
                filter === 'contact' 
                  ? 'bg-coral-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Contacto
            </button>
          </div>
        </div>

        {/* Proposals List */}
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-coral-500"></div>
            <p className="mt-2 text-gray-600">Cargando propuestas...</p>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {proposals.map((proposal) => (
                <li key={proposal.id}>
                  <div 
                    className="px-4 py-4 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedProposal(proposal)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className={`w-3 h-3 rounded-full ${
                            proposal.formType === 'services' ? 'bg-blue-500' : 'bg-green-500'
                          }`}></div>
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <p className="text-sm font-medium text-gray-900">
                              {proposal.nombre}
                            </p>
                            <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              proposal.formType === 'services' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {proposal.formType === 'services' ? 'Servicios' : 'Contacto'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">
                            {proposal.email}
                          </p>
                          <p className="text-sm text-gray-500 truncate max-w-md">
                            {proposal.descripcionProyecto}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">
                          {formatDate(proposal.createdAt)}
                        </p>
                        {proposal.referencias && proposal.referencias.length > 0 && (
                          <p className="text-xs text-gray-400">
                            📎 {proposal.referencias.length} archivo(s)
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            
            {proposals.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No hay propuestas disponibles</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Proposal Detail Modal */}
      {selectedProposal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Detalle de Propuesta
                </h2>
                <button
                  onClick={() => setSelectedProposal(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Información Personal
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Nombre</label>
                      <p className="text-gray-900">{selectedProposal.nombre}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Email</label>
                      <p className="text-gray-900">{selectedProposal.email}</p>
                    </div>
                    {selectedProposal.telefono && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Teléfono</label>
                        <p className="text-gray-900">{selectedProposal.telefono}</p>
                      </div>
                    )}
                    {selectedProposal.pais && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">País</label>
                        <p className="text-gray-900">{selectedProposal.pais}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-medium text-gray-500">Fecha</label>
                      <p className="text-gray-900">{formatDate(selectedProposal.createdAt)}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Detalles del Proyecto
                  </h3>
                  <div className="space-y-3">
                    {selectedProposal.estadoProyecto && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Estado del Proyecto</label>
                        <p className="text-gray-900">{selectedProposal.estadoProyecto}</p>
                      </div>
                    )}
                    {selectedProposal.tipoProyecto && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Tipo de Proyecto</label>
                        <p className="text-gray-900">{selectedProposal.tipoProyecto}</p>
                      </div>
                    )}
                    {selectedProposal.presupuesto && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Presupuesto</label>
                        <p className="text-gray-900">{selectedProposal.presupuesto}</p>
                      </div>
                    )}
                    {selectedProposal.tiempoEntrega && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Tiempo de Entrega</label>
                        <p className="text-gray-900">{selectedProposal.tiempoEntrega}</p>
                      </div>
                    )}
                    {selectedProposal.opcionContacto && (
                      <div>
                        <label className="text-sm font-medium text-gray-500">Método de Contacto Preferido</label>
                        <p className="text-gray-900">{selectedProposal.opcionContacto}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Descripción del Proyecto
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 whitespace-pre-wrap">
                    {selectedProposal.descripcionProyecto}
                  </p>
                </div>
              </div>
              
              {selectedProposal.referencias && selectedProposal.referencias.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Referencias ({selectedProposal.referencias.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProposal.referencias.map((ref, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {ref.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(ref.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-coral-500 text-white px-3 py-1 rounded text-sm hover:bg-coral-600 transition-colors"
                          >
                            Ver
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;