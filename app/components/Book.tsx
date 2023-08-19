import { AddWorkToBookcaseInput, Work } from "graphql/graphql";
import { useCallback, useMemo, useRef } from "react";
import { View, Text, TouchableHighlight, Pressable } from "react-native";
import { styled } from "styled-components";
import { ADD_WORK_TO_BOOKCASE } from "screens/gql/mutations/addWorkToBookcase";
import { useMutation } from "@apollo/client";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { MaterialIcons } from "@expo/vector-icons";

const StyledBook = styled(View)`
  width: 190px;
  height: 150px;
  border: 1px solid;
  margin: 10px 5px;
  justify-content: space-between;
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
  const [addWorkToBookcase, { data }] = useMutation<
    any,
    { input: AddWorkToBookcaseInput }
  >(ADD_WORK_TO_BOOKCASE);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const snapPoints = useMemo(() => [150, 150], []);

  const BookContextMenu = () => (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
    >
      <View style={{ flex: 1, padding: 24, rowGap: 5 }}>
        <BookContextMenuOption
          onPress={async () => {
            addWorkToBookcase({
              variables: { input: { workKey: work.key, userId: 6 } },
            });
          }}
        >
          <MaterialIcons name="library-add" size={24} color="black" />
          <Text>Add to Bookcase</Text>
        </BookContextMenuOption>
      </View>
    </BottomSheetModal>
  );

  return (
    <View style={{ flex: 1 }}>
      <TouchableHighlight
        onLongPress={handlePresentModalPress}
        underlayColor="white"
      >
        <StyledBook>
          <Text>{work.title}</Text>
          {work.authors.length ? (
            <Text>
              By:{" "}
              {work?.authors?.map((author) => (
                <Text key={author.name}>{author.name}</Text>
              ))}
            </Text>
          ) : null}
        </StyledBook>
      </TouchableHighlight>

      <BookContextMenu />
    </View>
  );
};
