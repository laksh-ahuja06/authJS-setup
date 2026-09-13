"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
  const session = await auth();

  if (!session?.user?.email) {
    throw new Error("Unauthorized");
  }

  const name = String(formData.get("name") ?? "").trim();

  if (!name) {
    throw new Error("Name is required");
  }

  await prisma.user.update({
    where: {
      email: session.user.email,
    },
    data: {
      name,
    },
  });

  revalidatePath("/profile");
}
