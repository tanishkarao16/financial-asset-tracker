"use client";

import Container from "../components/Container";
import Card from "../components/Card";
import { useAssets } from "../context/AssetContext";

export default function ReportPage() {
  const { assets } = useAssets();

  const total = assets.reduce((sum, a) => sum + a.value, 0);

  const byType = {
    cash: assets.filter(a => a.type === "cash").reduce((s, a) => s + a.value, 0),
    stock: assets.filter(a => a.type === "stock").reduce((s, a) => s + a.value, 0),
    crypto: assets.filter(a => a.type === "crypto").reduce((s, a) => s + a.value, 0),
  };

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          Financial Report
        </h1>
        <p className="text-sm text-zinc-400 mt-1">
          Overview of asset allocation and net worth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Net Worth">
          <p className="text-3xl font-semibold">
            ¥{total.toLocaleString()}
          </p>
        </Card>

        <Card title="Cash Allocation">
          <p className="text-2xl font-semibold">
            {((byType.cash / total) * 100 || 0).toFixed(1)}%
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            of total assets
          </p>
        </Card>

        <Card title="Investments Allocation">
          <p className="text-2xl font-semibold">
            {(((byType.stock + byType.crypto) / total) * 100 || 0).toFixed(1)}%
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            of total assets
          </p>
        </Card>
      </div>
    </Container>
  );
}
