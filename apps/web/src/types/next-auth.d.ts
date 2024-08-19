import { User } from "./user";

interface Payload extends User {
  role: boolean;
  token: string;
}

declare module "next-auth" {
  interface Session {
    user: Payload;
  }
}