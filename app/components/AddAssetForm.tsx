"use client";

import { useState } from "react";

export default function AddAssetForm({ onAddAsset }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("cash");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !value) return;

    const newAsset = {
      id: Date.now(),
      name,
      type,
      value: Number(value),
    };

    onAddAsset((prev) => [...prev, newAsset]);

    setName("");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Asset Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded bg-gray-800 p-2"
          placeholder="Savings Account"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Asset Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded bg-gray-800 p-2"
        >
          <option value="cash">Cash</option>
          <option value="stock">Stock</option>
          <option value="crypto">Crypto</option>
        </select>
      </div>

      <div>
        <label className="block text-sm mb-1">Value (¥)</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded bg-gray-800 p-2"
          placeholder="100000"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
      >
        Add Asset
      </button>
    </form>
  );
}
