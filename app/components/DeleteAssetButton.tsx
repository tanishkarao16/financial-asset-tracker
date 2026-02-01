"use client";

import { deleteAsset } from "../actions/assetActions";

export default function DeleteAssetButton({ id }: { id: number }) {
  return (
    <form action={deleteAsset}>
      <input type="hidden" name="id" value={id} />
      <button className="mt-4 text-sm text-red-400 hover:text-red-500">
        Delete
      </button>
    </form>
  );
}
