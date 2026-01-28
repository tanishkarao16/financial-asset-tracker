export type Asset = {
    id: number;
    name: string;
    type: "stock" | "crypto" | "cash";
    value: number;
  };
  
  export const assets: Asset[] = [
    { id: 1, name: "Savings", type: "cash", value: 320000 },
    { id: 2, name: "Stocks", type: "stock", value: 650000 },
    { id: 3, name: "Crypto", type: "crypto", value: 280000 },
  ];
  