import { Like } from "../like/Like";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
