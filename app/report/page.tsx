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
      <h1 className="text-2xl font-semibold mb-6">Financial Report</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Net Worth">
          <p className="text-3xl font-semibold">¥{total.toLocaleString()}</p>
        </Card>

        <Card title="Cash Allocation">
          <p>{((byType.cash / total) * 100 || 0).toFixed(1)}%</p>
        </Card>

        <Card title="Investments Allocation">
          <p>{(((byType.stock + byType.crypto) / total) * 100 || 0).toFixed(1)}%</p>
        </Card>
      </div>
    </Container>
  );
}
