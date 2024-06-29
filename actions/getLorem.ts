"use server";
import prisma from "@/lib/db";

export const getAll = async () => {
  try {
    const users = await prisma.lorem.findMany();
    return users;
  } catch (error) {
    console.log("error in getting records", error);
  }
};
