import { useMutation, useReactiveVar } from "@apollo/client";
import { CreateBookcasePayload } from "graphql/graphql";
import { Pressable, View, Text, Alert } from "react-native";
import { CREATE_BOOKCASE } from "screens/gql/mutations/createBookcase";
import { userVar } from "utils/cache";

export const Bookcase = () => {
  const user = useReactiveVar(userVar);

  if (!user) return null;
  const [createBookcase] = useMutation<{
    createBookcase: CreateBookcasePayload;
  }>(CREATE_BOOKCASE, {
    onCompleted: (data) => {
      userVar({
        ...user,
        authenticatable: {
          ...user.authenticatable,
          bookcase: data.createBookcase.bookcase,
        },
      });
    },
  });
  const bookcase = user.authenticatable.bookcase;

  const createPrompt = () =>
    Alert.prompt("Bookcase", "Name your bookcase", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Save",
        onPress: (name?: string) => {
          if (name) {
            createBookcase({
              variables: {
                input: {
                  name,
                },
              },
            });
          }
        },
      },
    ]);

  const NoBookcase = () => (
    <Pressable onPress={createPrompt}>
      <Text>Create Bookcase</Text>
    </Pressable>
  );

  return (
    <View>
      {bookcase ? (
        <>
          <Text>{bookcase.name}</Text>
          {bookcase.workKeys.map((workKey) => (
            <Text key={workKey}>{workKey}</Text>
          ))}
        </>
      ) : (
        <NoBookcase />
      )}
    </View>
  );
};
