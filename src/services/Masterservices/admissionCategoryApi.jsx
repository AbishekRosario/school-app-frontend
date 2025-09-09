import api from "../../api/axiosInstance";

export const admissionCategoryApi = {
  getAll: async () => {
    const response = await api.get("/admission-categories");
    return response.data;
  },
  create: async (name) => {
    const response = await api.post("/admission-categories", { name });
    return response.data;
  },
  update: async (id, name) => {
    const response = await api.put(`/admission-categories/${id}`, { name });
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/admission-categories/${id}`);
    return response.data;
  },
};
