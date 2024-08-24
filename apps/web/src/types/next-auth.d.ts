import { User } from "./user";

interface Payload extends User {
  role: string;
  token: string;
}

declare module "next-auth" {
  interface Session {
    user: Payload;
  }
}