import { Request, Response } from "express";
import { prismaClient } from "..";
import bcrypt from "bcryptjs";
import { Token } from "../secrets";
import * as jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  let user = await prismaClient.user.findFirst({
    where: { email: email, password: hashedPassword },
  });
  if (user) {
    // throw new Error("user is already exist");
    console.log({ message: "user is already exist" });
  }

  user = await prismaClient.user.create({
    data: {
      email: email,
      password: hashedPassword,
      name: name,
    },
  });
  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  let user = await prismaClient.user.findFirst({
    where: { email: email },
  });
  if (!user) {
    console.log({ message: "user not found" });
  }
  if (!password) {
    console.log({ message: "password is invalid" });
  }
  // const token = jwt.sign({ userId: user.id }, Token);
  res.json("login");
};
