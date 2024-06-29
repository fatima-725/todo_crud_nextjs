"use server";

import prisma from "@/lib/db";

export const createEntry = async (name: string, isCompleted: boolean) => {
  try {
    const result = await prisma.lorem.create({
      data: {
        name,
        isCompleted,
      },
    });
    return result;
  } catch (error) {
    console.log("error creating new entry", error);
  }
};
