"use client";

import { createContext, useContext, useState } from "react";
import { assets as initialAssets } from "../lib/assets";

export type Asset = {
  id: number;
  name: string;
  type: "cash" | "stock" | "crypto";
  value: number;
};

type AssetContextType = {
  assets: Asset[];
  setAssets: React.Dispatch<React.SetStateAction<Asset[]>>;
};

const AssetContext = createContext<AssetContextType | null>(null);

export function AssetProvider({ children }: { children: React.ReactNode }) {
  const [assets, setAssets] = useState<Asset[]>(initialAssets);

  return (
    <AssetContext.Provider value={{ assets, setAssets }}>
      {children}
    </AssetContext.Provider>
  );
}

export function useAssets() {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error("useAssets must be used inside AssetProvider");
  }
  return context;
}
