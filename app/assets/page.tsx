"use client";

import AddAssetForm from "../components/AddAssetForm";
import Card from "../components/Card";
import Container from "../components/Container";
import { useAssets } from "../context/AssetContext";

export default function AssetsPage() {
  const { assets, setAssets } = useAssets();

  const deleteAsset = (id: number) => {
    setAssets((prev) => prev.filter((asset) => asset.id !== id));
  };

  return (
    <Container>
    <div className="mb-8">
  <h1 className="text-2xl font-semibold tracking-tight">
    Assets
  </h1>
  <p className="text-sm text-zinc-400 mt-1">
    Manage and track all your financial assets
  </p>
</div>

      <AddAssetForm />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  {assets.length === 0 && (
    <div className="col-span-full border border-dashed border-zinc-700 rounded-lg p-6 text-center">
  <p className="text-zinc-400 text-sm">
    No assets added yet.
  </p>
  <p className="text-zinc-500 text-xs mt-1">
    Use the form above to add your first asset.
  </p>
</div>


  )}

  {assets.map((asset) => (
    <Card key={asset.id} title={asset.name}>
      <p className="text-sm text-gray-400 capitalize">{asset.type}</p>
      <p className="text-xl font-semibold mt-2">
        ¥{asset.value.toLocaleString()}
      </p>

      <button
        onClick={() => deleteAsset(asset.id)}
        className="mt-4 text-sm text-red-400 hover:text-red-500"
      >
        Delete
      </button>
    </Card>
  ))}
</div>

    </Container>
  );
}
