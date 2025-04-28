import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(5).max(10),
  name: z.string(),
});

export const SigninSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(5).max(10),
});

export const CreateRoomSchema = z.object({
  roomname: z.string().min(5).max(20),
});
