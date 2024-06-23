import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
