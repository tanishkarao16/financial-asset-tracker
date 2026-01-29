"use client";

import { useState } from "react";
import { useAssets } from "../context/AssetContext";

export default function AddAssetForm() {
  const { setAssets } = useAssets();

  const [name, setName] = useState("");
  const [type, setType] = useState<"cash" | "stock" | "crypto">("cash");
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !value) return;

    setAssets((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        type,
        value: Number(value),
      },
    ]);

    // reset form
    setName("");
    setValue("");
    setType("cash");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-wrap gap-3"
    >
      <input
        className="bg-zinc-800 px-3 py-2 rounded-md text-sm outline-none"
        placeholder="Asset name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        className="bg-zinc-800 px-3 py-2 rounded-md text-sm outline-none"
        value={type}
        onChange={(e) =>
          setType(e.target.value as "cash" | "stock" | "crypto")
        }
      >
        <option value="cash">Cash</option>
        <option value="stock">Stock</option>
        <option value="crypto">Crypto</option>
      </select>

      <input
        type="number"
        className="bg-zinc-800 px-3 py-2 rounded-md text-sm outline-none"
        placeholder="Value (¥)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        type="submit"
        className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
      >
        Add Asset
      </button>
    </form>
  );
}
