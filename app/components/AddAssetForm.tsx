"use client";

import { addAsset } from "../actions/assetActions";

export default function AddAssetForm() {
  return (
    <form action={addAsset} className="space-y-4">
      <input
        name="name"
        placeholder="Asset name"
        className="w-full p-2 rounded bg-zinc-800"
        required
      />

      <select
        name="type"
        className="w-full p-2 rounded bg-zinc-800"
        required
      >
        <option value="cash">Cash</option>
        <option value="stock">Stock</option>
        <option value="crypto">Crypto</option>
      </select>

      <input
        name="value"
        type="number"
        placeholder="Value"
        className="w-full p-2 rounded bg-zinc-800"
        required
      />

      <button className="bg-white text-black px-4 py-2 rounded">
        Add Asset
      </button>
    </form>
  );
}
