import { Request, Response } from "express";
import { prismaClient } from "..";
import bcrypt from "bcryptjs";

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  let user = await prismaClient.user.findFirst({
    where: { email: email, password: hashedPassword },
  });
  if (!user) {
    throw new Error("user is already exist");
  }

  res.json(user);
};
