"use server";

import prisma from "@/lib/db";

export const updateEntry = async (id: string, name: string) => {
  try {
    const updateUser = await prisma.lorem.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return updateUser;
  } catch (error) {
    console.log("updation error", error);
  }
};
