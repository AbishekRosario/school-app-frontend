import api from '../../api/axiosInstance';

export const documentTypeApi = {
  getAll: async () => {
    const response = await api.get('/document-types');
    return response.data;
  },
  create: async (name) => {
    const response = await api.post('/document-types', { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/document-types/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/document-types/${id}`);
    return response.data;
  }
};
