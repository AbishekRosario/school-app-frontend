import api from '../../api/axiosInstance';

export const casteApi = {
  getAll: async () => {
    const response = await api.get('/castes');
    return response.data;
  },
  create: async (name) => {
    const response = await api.post('/castes', { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/castes/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/castes/${id}`);
    return response.data;
  }
};
