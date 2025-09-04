import api from '../../api/axiosInstance';

export const stdMasterApi = {
  getAll: async () => {
    const response = await api.get('/stdmaster');
    return response.data;
  },
  create: async (name) => {
    const response = await api.post('/stdmaster', { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/stdmaster/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/stdmaster/${id}`);
    return response.data;
  }
};
