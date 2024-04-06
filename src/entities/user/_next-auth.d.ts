import NextAuth from "next-auth";
import { SessionEntity, UserEntity } from "@/entities/user/_domain/types";

declare module "next-auth" {
  interface Session extends SessionEntity {}
  interface User extends UserEntity {}
}
