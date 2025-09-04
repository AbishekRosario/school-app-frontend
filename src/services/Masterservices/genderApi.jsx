import api from '../../api/axiosInstance';

export const genderApi = {
  getAll: async () => {
    const response = await api.get('/genders');
    return response.data;
  },

  create: async (name) => {
    const response = await api.post('/genders', { name });
    return response.data;
  },

  update: async (id, name) => {
    const response = await api.put(`/genders/${id}`, { name });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/genders/${id}`);
    return response.data;
  },
};
