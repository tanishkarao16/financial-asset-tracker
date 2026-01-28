import { Asset } from "../lib/assets";

export default function AssetTable({ assets }: { assets: Asset[] }) {
  return (
    <div className="mt-8 rounded-xl border border-zinc-800 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-zinc-900 text-zinc-400 text-sm">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Type</th>
            <th className="px-6 py-3 text-right">Value (¥)</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((asset) => (
            <tr
              key={asset.id}
              className="border-t border-zinc-800 hover:bg-zinc-900/50"
            >
              <td className="px-6 py-4">{asset.name}</td>
              <td className="px-6 py-4 capitalize text-zinc-400">
                {asset.type}
              </td>
              <td className="px-6 py-4 text-right font-medium">
                {asset.value.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
