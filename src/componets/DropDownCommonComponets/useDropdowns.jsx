import { useState, useEffect } from "react";
import api from "../../api/axiosInstance";

export default function useDropdowns(requestedTables = []) {
  const [dropdowns, setDropdowns] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!Array.isArray(requestedTables) || requestedTables.length === 0) {
      setDropdowns({});
      setLoading(false);
      return;
    }

    const fetchDropdowns = async () => {
      try {
        setLoading(true);

        // Create a URLSearchParams object for correct array formatting
        const params = new URLSearchParams();
        requestedTables.forEach((table) => params.append("tables[]", table));

        const res = await api.get(`/dropdowns?${params.toString()}`);
        setDropdowns(res.data);
      } catch (err) {
        setError({
          message: err?.response?.data?.message || err.message || "Failed to load dropdowns",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDropdowns();
  }, [requestedTables]);

  return { dropdowns, loading, error };
}
