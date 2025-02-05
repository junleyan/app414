import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [activeYear, setActiveYear] = useState<number>(2024);
  const years = [2022, 2023, 2024];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="flex justify-between items-center bg-blue-400 p-4 rounded">
        <h1 className="text-3xl font-bold text-black">spire</h1>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500">pfp</div>
          <div>
            <h2 className="text-xl font-bold text-black">John Doe</h2>
            <p className="text-sm text-gray-700">Auditor</p>
          </div>
        </div>
      </header>

      <div className="flex gap-2 mt-4">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-4 py-2 border rounded ${
              activeYear === year ? "bg-gray-300" : "bg-white"
            }`}
          >
            {year}
          </button>
        ))}
        <button className="px-4 py-2 border rounded bg-white">Add New Year</button>
      </div>

      <div className="mt-4 space-y-4">
        {[
          "Income Statement",
          "Balance Sheet"
        ].map((title) => (
          <div key={title} className="bg-gray-200 p-4 rounded shadow-sm flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-gray-600">30% drop in return rate of Investment</p>
            </div>
            <button className="px-4 py-2 bg-white border rounded">Edit Sheet</button>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-gray-200 p-4 rounded shadow-sm flex justify-between items-center">
        <h3 className="text-2xl font-bold">Graphs and Charts</h3>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border rounded">Add</button>
          <button className="px-4 py-2 bg-white border rounded">View</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
