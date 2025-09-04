import api from '../../api/axiosInstance';

export const qualificationApi = {
  getAll: async () => {
    const response = await api.get('/qualification');
    return response.data;
  },
  create: async (name) => {
    const response = await api.post('/qualification', { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/qualification/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/qualification/${id}`);
    return response.data;
  }
};
