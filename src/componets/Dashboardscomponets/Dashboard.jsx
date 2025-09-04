import React, { useMemo, useState } from "react";
import useDropdowns from "../DropDownCommonComponets/useDropdowns";

const Dashboard = () => {
  // all dropdown tables
  const tables = useMemo(
    () => [
      "m_city",
      "std_master",
      "subject_specialization",
      "m_qualification",
      "m_fatheroccupation",
      "m_motheroccupation",
      "m_bloodgroup",
      "m_gender"
    ],
    []
  );

  const { dropdowns, loading, error } = useDropdowns(tables);
  const [selectedModes, setSelectedModes] = useState([]);

  const handleCheckboxChange = (mode) => {
    setSelectedModes((prev) =>
      prev.includes(mode)
        ? prev.filter((item) => item !== mode)
        : [...prev, mode]
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      {!loading && !error && (
        <>
          {/* City */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">City</label>
            <select className="border rounded px-2 py-1 w-full">
              <option value="">Select City</option>
              {dropdowns.m_city?.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Standard */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Standard</label>
            <select className="border rounded px-2 py-1 w-full">
              <option value="">Select Standard</option>
              {dropdowns.std_master?.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Specialization */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Subject Specialization</label>
            <select className="border rounded px-2 py-1 w-full">
              <option value="">Select Specialization</option>
              {dropdowns.subject_specialization?.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Qualification */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Qualification</label>
            <select className="border rounded px-2 py-1 w-full">
              <option value="">Select Qualification</option>
              {dropdowns.m_qualification?.map((q) => (
                <option key={q.id} value={q.id}>
                  {q.name}
                </option>
              ))}
            </select>
          </div>

          {/* Father Occupation */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Father Occupation</label>
            <select className="border rounded px-2 py-1 w-full">
              <option value="">Select Father Occupation</option>
              {dropdowns.m_fatheroccupation?.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mother Occupation */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Mother Occupation</label>
            <select className="border rounded px-2 py-1 w-full">
              <option value="">Select Mother Occupation</option>
              {dropdowns.m_motheroccupation?.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Blood Group */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Blood Group</label>
            <select className="border rounded px-2 py-1 w-full">
              <option value="">Select Blood Group</option>
              {dropdowns.m_bloodgroup?.map((bg) => (
                <option key={bg.id} value={bg.id}>
                  {bg.name}
                </option>
              ))}
            </select>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Gender</label>
            <select className="border rounded px-2 py-1 w-full">
              <option value="">Select Gender</option>
              {dropdowns.m_gender?.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>

          {/* Online/Offline/Hybrid as Checkboxes */}
          <div>
            <label className="block mb-1 font-medium">Mode</label>
            <div className="space-y-2">
              {dropdowns.onlineOfflineOptions?.map((mode, index) => (
                <label key={index} className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={mode}
                    checked={selectedModes.includes(mode)}
                    onChange={() => handleCheckboxChange(mode)}
                    className="accent-blue-600"
                  />
                  {mode}
                </label>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
