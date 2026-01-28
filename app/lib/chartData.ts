import { assets } from "./assets";

export const assetDistribution = [
  {
    name: "Cash",
    value: assets
      .filter(a => a.type === "cash")
      .reduce((sum, a) => sum + a.value, 0),
  },
  {
    name: "Investments",
    value: assets
      .filter(a => a.type === "stock")
      .reduce((sum, a) => sum + a.value, 0),
  },
  {
    name: "Others",
    value: assets
      .filter(a => a.type === "crypto")
      .reduce((sum, a) => sum + a.value, 0),
  },
];
