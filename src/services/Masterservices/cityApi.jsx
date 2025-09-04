import api from '../../api/axiosInstance';

export const cityApi = {
  getAll: async () => {
    const response = await api.get('/cities');
    return response.data;
  },

  create: async (name) => {
    const response = await api.post('/cities', { name });
    return response.data;
  },

  update: async (id, name) => {
    const response = await api.put(`/cities/${id}`, { name });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/cities/${id}`);
    return response.data;
  },
};
