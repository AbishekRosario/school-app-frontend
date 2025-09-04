import api from '../../api/axiosInstance';

export const subjectSpecializationApi = {
  getAll: async () => {
    const response = await api.get('/subjectspecialization');
    return response.data;
  },
  create: async (name) => {
    const response = await api.post('/subjectspecialization', { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/subjectspecialization/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/subjectspecialization/${id}`);
    return response.data;
  }
};
