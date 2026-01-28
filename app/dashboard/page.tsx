import Header from "../components/Header";
import Container from "../components/Container";
import Card from "../components/Card";
import { assets } from "../lib/assets";

export default function DashboardPage() {
  const netWorth = assets.reduce(
    (total, asset) => total + asset.value,
    0
  );

  const cash = assets
    .filter((a) => a.type === "cash")
    .reduce((sum, a) => sum + a.value, 0);

  return (
    <Container>
      <Header />

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Net Worth">
          <p className="text-3xl font-semibold">
            ¥{netWorth.toLocaleString()}
          </p>
        </Card>

        <Card title="Assets">
          <p className="text-3xl font-semibold">{assets.length}</p>
        </Card>

        <Card title="Cash">
          <p className="text-3xl font-semibold">
            ¥{cash.toLocaleString()}
          </p>
        </Card>
      </div>
    </Container>
  );
}
