import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { RootDrawerParamList } from "app/Root";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TextInput } from "components/inputs/TextInput/TextInput";
import { useCallback, useEffect, useState } from "react";
import { Work, WorkConnection } from "graphql/graphql";
import { useQuery } from "@apollo/client";
import { GET_WORKS } from "./gql/queries/getWorks";
import { debounce } from "utils/debounce";

export type HomeScreenProps = NativeStackScreenProps<
  RootDrawerParamList,
  "Home"
>;
export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [, setSearchVal] = useState("");
  const { loading, data, error, refetch } = useQuery<{
    worksConnection: WorkConnection;
  }>(GET_WORKS);

  const onChange = async (value: string) => {
    setSearchVal(value);
    await refetch({ title: value });
  };

  const debounceOnChange = useCallback(debounce(onChange, 300), []);

  if (loading) return <ActivityIndicator size="large" />;

  if (error) return <Text>Error</Text>;

  return (
    <View>
      <TextInput onChange={(value) => debounceOnChange(value)} />
      <FlatList
        data={data?.worksConnection.nodes}
        renderItem={({ item }) => (
          <Text key={item?.key}>
            <Text>{item?.title}</Text>
            {item?.authors?.map((author) => (
              <Text>-{author.name}</Text>
            ))}
          </Text>
        )}
      />
    </View>
  );
};
