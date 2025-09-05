import api from '../../api/axiosInstance';

export const sectionApi = {
  getAll: async () => {
    const response = await api.get('/sections');
    return response.data;
  },
  create: async (name) => {
    const response = await api.post('/sections', { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/sections/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/sections/${id}`);
    return response.data;
  }
};
