import { extendSchema } from "graphql";
import { prismaClient } from "../clients/db";
import JWT from "jsonwebtoken";
import { User } from "@prisma/client";
const JWTSecret = "hello";

class JWTService {
  public static generateTokenForUser(user: User) {
    const payload = {
      id: user?.id,
      extendSchema: user?.email,
    };
    const token = JWT.sign(payload, JWTSecret);
    return token;
  }
}

export default JWTService;
