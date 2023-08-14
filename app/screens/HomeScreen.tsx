import { View, Text, FlatList } from "react-native";
import { RootDrawerParamList } from "app/Root";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TextInput } from "components/inputs/TextInput/TextInput";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Work, WorksQuery } from "graphql/graphql";
import { useQuery } from "@apollo/client";
import { GET_WORKS } from "./gql/queries/getWorks";

export type HomeScreenProps = NativeStackScreenProps<
  RootDrawerParamList,
  "Home"
>;
export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState<Work[] | []>([]);
  const { loading, data, error, refetch } = useQuery<{ works: Work[] }>(
    GET_WORKS
  );

  useEffect(() => {
    const asyncSearch = async () => {
      if (searchVal) {
        await refetch({ title: searchVal });
      }
    };

    asyncSearch();
  }, [searchVal]);

  useEffect(() => {
    if (data) {
      setSearchResults(data.works);
    }
  }, [data]);

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Error</Text>;

  return (
    <View>
      <TextInput onChange={(value) => setSearchVal(value)} />
      <FlatList
        data={searchResults}
        renderItem={({
          item: {
            authors,
            data: { title },
            key,
          },
        }) => (
          <Text key={key}>
            <Text>{title}</Text>
            {authors?.map((author) => (
              <Text>-{author.data.name}</Text>
            ))}
          </Text>
        )}
      />
    </View>
  );
};
