import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TweetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="content" multiline source="content" />
        <NumberInput step={1} label="likes" source="likes" />
      </SimpleForm>
    </Edit>
  );
};
