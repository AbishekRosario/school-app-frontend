import api from '../../api/axiosInstance';

export const bloodGroupApi = {
  getAll: async () => {
    const response = await api.get('/bloodgroups');
    return response.data;
  },

  create: async (name) => {
    const response = await api.post('/bloodgroups', { name });
    return response.data;
  },

  update: async (id, name) => {
    const response = await api.put(`/bloodgroups/${id}`, { name });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/bloodgroups/${id}`);
    return response.data;
  },
};
