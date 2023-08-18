import { AddWorkToBookcaseInput, Work } from "graphql/graphql";
import { useRef, useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styled } from "styled-components";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { ADD_WORK_TO_BOOKCASE } from "screens/gql/mutations/addWorkToBookcase";
import { useMutation } from "@apollo/client";

const StyledBook = styled(View)`
  width: 190px;
  height: 150px;
  border: 1px solid;
  margin: 10px 5px;
  justify-content: space-between;
`;

type BookProps = {
  work: Work;
};

export const Book = ({ work }: BookProps) => {
  const [isDisplayingMenu, setIsDisplayingMenu] = useState(false);
  const contextMenuButtonRef = useRef(null);
  const [addWorkToBookcase, { data }] = useMutation<
    any,
    { input: AddWorkToBookcaseInput }
  >(ADD_WORK_TO_BOOKCASE);

  const PressableBook = () => (
    <TouchableHighlight
      onLongPress={() => setIsDisplayingMenu(true)}
      underlayColor="white"
      ref={contextMenuButtonRef}
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
  );

  return (
    <View>
      <Menu
        opened={isDisplayingMenu}
        onBackdropPress={() => setIsDisplayingMenu(false)}
      >
        <MenuTrigger
          customStyles={{ TriggerTouchableComponent: PressableBook }}
        />
        <MenuOptions>
          <MenuOption
            onSelect={() =>
              addWorkToBookcase({
                variables: { input: { workKey: work.key, userId: 83 } },
              })
            }
            text="Add to Bookcase"
          />
        </MenuOptions>
      </Menu>
    </View>
  );
};
