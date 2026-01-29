import Container from "../components/Container";
import Card from "../components/Card";
import { getAssets } from "../actions/assetActions";

export default async function AssetsPage() {
  const assets = await getAssets();

  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-6">Assets</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {assets.length === 0 && (
          <p className="text-zinc-400 text-sm col-span-full">
            No assets added yet.
          </p>
        )}

        {assets.map((asset) => (
          <Card key={asset.id} title={asset.name}>
            <p className="text-sm text-zinc-400 capitalize">{asset.type}</p>
            <p className="text-xl font-semibold mt-2">
              ¥{asset.value.toLocaleString()}
            </p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
