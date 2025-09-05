import api from '../../api/axiosInstance';

export const statusApi = {
  getAll: async () => {
    const response = await api.get('/statuses');
    return response.data;
  },
  create: async (name) => {
    const response = await api.post('/statuses', { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/statuses/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/statuses/${id}`);
    return response.data;
  }
};
