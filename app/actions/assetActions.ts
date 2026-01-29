"use server";

import { prisma } from "@/app/lib/prisma";

export async function getAssets() {
  return prisma.asset.findMany({
    orderBy: { createdAt: "desc" },
  });
}
