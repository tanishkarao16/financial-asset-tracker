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
      <h1 className="text-2xl font-semibold mb-6">Assets</h1>

      <AddAssetForm />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
