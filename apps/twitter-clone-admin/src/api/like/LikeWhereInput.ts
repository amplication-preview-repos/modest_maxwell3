import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
