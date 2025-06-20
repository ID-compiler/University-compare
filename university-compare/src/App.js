import React, { useState } from "react";
import "./index.css";

const universities = [
  { id: 1, name: "TUM", country: "Germany", tuition: 0, popularity: 9.2 },
  {
    id: 2,
    name: "ETH Zurich",
    country: "Switzerland",
    tuition: 1500,
    popularity: 9.5,
  },
  {
    id: 3,
    name: "Toronto",
    country: "Canada",
    tuition: 25000,
    popularity: 8.7,
  },
  {
    id: 4,
    name: "Melbourne",
    country: "Australia",
    tuition: 28000,
    popularity: 8.3,
  },
  {
    id: 5,
    name: "LMU Munich",
    country: "Germany",
    tuition: 0,
    popularity: 8.9,
  },
];

function App() {
  const [selected, setSelected] = useState([]);

  const toggleUniversity = (uni) => {
    setSelected((prev) =>
      prev.some((u) => u.id === uni.id)
        ? prev.filter((u) => u.id !== uni.id)
        : prev.length < 3
        ? [...prev, uni]
        : prev
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-50 to-pink-100 p-6 font-sans">
      <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-12 flex justify-center items-center gap-2">
        University Compare Tool
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {universities.map((uni) => {
          const isSelected = selected.some((s) => s.id === uni.id);
          return (
            <div
              key={uni.id}
              onClick={() => toggleUniversity(uni)}
              className={`p-6 rounded-3xl shadow-xl transition-all transform duration-300 cursor-pointer bg-white border-2 hover:scale-105 hover:-rotate-1 hover:shadow-2xl ${
                isSelected
                  ? "border-purple-600 ring-2 ring-purple-300 bg-purple-50"
                  : "border-gray-200"
              }`}
              style={{
                boxShadow: isSelected
                  ? "0 8px 30px rgba(128, 90, 213, 0.25)"
                  : "",
              }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {uni.name}
              </h2>

              <div className="flex items-center text-gray-600 space-x-2 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 90 90"
                  className="w-5 h-5"
                >
                  <path
                    d="M45 90a1 1 0 0 1-1-1V41.06a1 1 0 0 1 2 0V89a1 1 0 0 1-1 1z"
                    fill="#66676B"
                  />
                  <circle cx="45" cy="20.53" r="20.53" fill="#F23F38" />
                  <circle cx="52.08" cy="13.46" r="5.06" fill="#FF9E9A" />
                </svg>
                <span className="text-sm">{uni.country}</span>
              </div>

              <p className="text-xs text-gray-400 italic">
                Click to{" "}
                {selected.some((s) => s.id === uni.id) ? "remove" : "add"} to
                compare
              </p>
            </div>
          );
        })}
      </div>

      {selected.length > 0 && (
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-x-auto border border-gray-100">
          <table className="w-full text-sm text-gray-700 table-auto">
            <thead className="bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 text-gray-800">
              <tr>
                <th className="px-6 py-4 font-semibold text-left">Attribute</th>
                {selected.map((uni) => (
                  <th key={uni.id} className="px-6 py-4 font-semibold">
                    {uni.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Country</td>
                {selected.map((uni) => (
                  <td key={uni.id} className="px-6 py-4">
                    {uni.country}
                  </td>
                ))}
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-6 py-4 font-medium">Tuition Fee</td>
                {selected.map((uni) => (
                  <td key={uni.id} className="px-6 py-4">
                    ${uni.tuition.toLocaleString()}
                  </td>
                ))}
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Popularity</td>
                {selected.map((uni) => (
                  <td key={uni.id} className="px-6 py-4">
                    {uni.popularity}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
