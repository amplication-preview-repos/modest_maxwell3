import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TweetWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: IntNullableFilter;
};
