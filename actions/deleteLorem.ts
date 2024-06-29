"use server";

import prisma from "@/lib/db";

export const deleteEntry = async (id: string) => {
  try {
    const deleteUser = await prisma.lorem.delete({
      where: {
        id,
      },
    });
    return deleteUser;
  } catch (error) {
    console.log("deletion error", error);
  }
};
