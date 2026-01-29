"use client";

import { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Card from "../components/Card";
import AddAssetForm from "../components/AddAssetForm";
import { assets as initialAssets } from "../lib/assets";

type Asset = {
  id: number;
  name: string;
  type: "cash" | "stock" | "crypto";
  value: number;
};

export default function AssetsPage() {
  const [assets, setAssets] = useState<Asset[]>(initialAssets);

  const handleDelete = (id: number) => {
    setAssets((prev) => prev.filter((asset) => asset.id !== id));
  };

  return (
    <Container>
      <Header />

      <div className="p-6 space-y-6">
        {/* Add Asset */}
        <Card title="Add Asset">
          <AddAssetForm onAddAsset={setAssets} />
        </Card>

        {/* Assets List */}
        <Card title="Your Assets">
          {assets.length === 0 ? (
            <p className="text-gray-400">No assets added yet.</p>
          ) : (
            <div className="space-y-4">
              {assets.map((asset) => (
                <div
                  key={asset.id}
                  className="flex justify-between items-center border-b border-gray-700 pb-2"
                >
                  <div>
                    <p className="font-medium">{asset.name}</p>
                    <p className="text-sm text-gray-400 capitalize">
                      {asset.type}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-semibold">
                      ¥{asset.value.toLocaleString()}
                    </p>

                    <button
                      onClick={() => handleDelete(asset.id)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </Container>
  );
}
