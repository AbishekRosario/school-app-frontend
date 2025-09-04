import api from '../../api/axiosInstance';

export const motherOccupationApi = {
  getAll: async () => {
    const response = await api.get('/motheroccupations');
    return response.data;
  },
  create: async (name) => {
    const response = await api.post('/motheroccupations', { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/motheroccupations/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/motheroccupations/${id}`);
    return response.data;
  },
};
