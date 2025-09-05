import api from '../../api/axiosInstance';

export const religionApi = {
  getAll: async () => {
    const response = await api.get('/religions');
    return response.data;
  },
  create: async (name) => {
    const response = await api.post('/religions', { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/religions/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/religions/${id}`);
    return response.data;
  }
};
