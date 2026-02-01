"use server";

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";

export async function addAsset(formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as "cash" | "stock" | "crypto";
  const value = Number(formData.get("value"));

  if (!name || !type || !value) return;

  await prisma.asset.create({
    data: {
      name,
      type,
      value,
    },
  });

  // 🔥 Auto-refresh assets + dashboard
  revalidatePath("/assets");
  revalidatePath("/dashboard");
}

export async function deleteAsset(formData: FormData) {
  const id = Number(formData.get("id"));

  if (!id) return;

  await prisma.asset.delete({
    where: { id },
  });

  revalidatePath("/assets");
  revalidatePath("/dashboard");
}
