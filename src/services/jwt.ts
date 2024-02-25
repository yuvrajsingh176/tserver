import JWT from "jsonwebtoken";
import { User } from "@prisma/client";
import { JWTUser } from "../interfaces";
const JWTSecret = "hello";

class JWTService {
  public static generateTokenForUser(user: User) {
    const payload: JWTUser = {
      id: user?.id,
      email: user?.email,
    };
    const token = JWT.sign(payload, JWTSecret);
    return token;
  }

  public static decodeToken(token: string) {
    return JWT.verify(token, JWTSecret) as JWTUser;
  }
}

export default JWTService;
