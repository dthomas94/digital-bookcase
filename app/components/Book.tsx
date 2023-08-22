import {
  AddWorkToBookcaseInput,
  RemoveWorkFromBookcaseInput,
  Work,
} from "graphql/graphql";
import { useCallback, useMemo, useRef } from "react";
import { View, Text, TouchableHighlight, Pressable } from "react-native";
import { styled } from "styled-components";
import { ADD_WORK_TO_BOOKCASE } from "screens/gql/mutations/addWorkToBookcase";
import { useMutation, useReactiveVar } from "@apollo/client";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { userVar } from "utils/cache";
import { REMOVE_WORK_FROM__BOOKCASE } from "screens/gql/mutations/removeWorkFromBookcase";

const StyledBook = styled(View)`
  width: 100%;
  height: 100%;
  border: 1px solid;
  justify-content: space-between;
  overflow: hidden;
`;

const BookContextMenuOption = styled(Pressable)`
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  column-gap: 10px;
`;

type BookProps = {
  work: Work;
};

export const Book = ({ work }: BookProps) => {
  const user = useReactiveVar(userVar);
  if (!user) return null;

  const [addWorkToBookcase] = useMutation<
    any,
    { input: AddWorkToBookcaseInput }
  >(ADD_WORK_TO_BOOKCASE, {
    onCompleted: (data) =>
      userVar({
        ...user,
        authenticatable: {
          ...user.authenticatable,
          bookcase: data.addWorkToBookcase.bookcase,
        },
      }),
  });

  const [removeWorkFromBookcase] = useMutation<
    any,
    { input: RemoveWorkFromBookcaseInput }
  >(REMOVE_WORK_FROM__BOOKCASE, {
    onCompleted: (data) =>
      userVar({
        ...user,
        authenticatable: {
          ...user.authenticatable,
          bookcase: data.removeWorkFromBookcase.bookcase,
        },
      }),
  });

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const snapPoints = useMemo(() => [150, 150], []);

  const BookContextMenu = () => (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
    >
      <View style={{ flex: 1, padding: 24, rowGap: 5 }}>
        {!user.authenticatable.bookcase?.workKeys.includes(work.key) ? (
          <BookContextMenuOption
            onPress={async () => {
              await addWorkToBookcase({
                variables: {
                  input: {
                    workKey: work.key,
                  },
                },
              });
              handleDismissModalPress();
            }}
          >
            <MaterialIcons name="library-add" size={24} color="black" />
            <Text>Add to Bookcase</Text>
          </BookContextMenuOption>
        ) : (
          <BookContextMenuOption
            onPress={async () => {
              await removeWorkFromBookcase({
                variables: {
                  input: {
                    workKey: work.key,
                  },
                },
              });
            }}
          >
            <MaterialIcons name="delete" size={24} color="black" />
            <Text>Remove from Bookcase</Text>
          </BookContextMenuOption>
        )}
      </View>
    </BottomSheetModal>
  );

  return (
    <View style={{ flex: 1, marginVertical: 10, marginHorizontal: 10 }}>
      <TouchableHighlight
        onLongPress={handlePresentModalPress}
        underlayColor="white"
        style={{ width: 100, height: 150 }}
      >
        <StyledBook>
          {work.covers.length ? (
            <Image
              style={{ flex: 1 }}
              source={{
                uri: `http://covers.openlibrary.org/b/id/${work.covers[0]}-M.jpg`,
                height: 150,
                width: 100,
              }}
            />
          ) : (
            <>
              <Text>{work.title}</Text>
              {work.authors.map((author) => (
                <Text key={author.name}>{`By ${author.name}`}</Text>
              ))}
            </>
          )}
        </StyledBook>
      </TouchableHighlight>

      <BookContextMenu />
    </View>
  );
};
