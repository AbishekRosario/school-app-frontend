import api from '../../api/axiosInstance'

export const fatherOccupationApi = {
  getAll: async () => {
    const response = await api.get('/fatheroccupations'); 
    return response.data;
  },
  create: async (name) => {
    const response = await api.post('/fatheroccupations', { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/fatheroccupations/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/fatheroccupations/${id}`);
    return response.data;
  },
};
