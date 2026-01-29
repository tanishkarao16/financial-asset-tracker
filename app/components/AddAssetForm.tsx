"use client";

import { useState } from "react";

type Asset = {
  id: number;
  name: string;
  type: "cash" | "stock" | "crypto";
  value: number;
};

type Props = {
  onAddAsset: React.Dispatch<React.SetStateAction<Asset[]>>;
};

export default function AddAssetForm({ onAddAsset }: Props) {
  const [name, setName] = useState("");
  const [type, setType] = useState<Asset["type"]>("cash");
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !value) return;

    onAddAsset((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        type,
        value: Number(value),
      },
    ]);

    // Reset form
    setName("");
    setType("cash");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Asset name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 text-sm"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value as Asset["type"])}
        className="w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 text-sm"
      >
        <option value="cash">Cash</option>
        <option value="stock">Stock</option>
        <option value="crypto">Crypto</option>
      </select>

      <input
        type="number"
        placeholder="Value (¥)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded bg-gray-900 border border-gray-700 px-3 py-2 text-sm"
      />

      <button
        type="submit"
        className="w-full rounded bg-white text-black py-2 text-sm font-medium hover:bg-gray-200"
      >
        Add Asset
      </button>
    </form>
  );
}
