import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { RootDrawerParamList } from "app/Root";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TextInput } from "components/inputs/TextInput/TextInput";
import { useCallback, useState } from "react";
import { WorkConnection } from "graphql/graphql";
import { useQuery } from "@apollo/client";
import { GET_WORKS } from "./gql/queries/getWorks";
import { debounce } from "utils/debounce";

export type HomeScreenProps = NativeStackScreenProps<
  RootDrawerParamList,
  "Home"
>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [searchVal, setSearchVal] = useState("");
  const { loading, data, error, refetch, fetchMore } = useQuery<{
    worksConnection: WorkConnection;
  }>(GET_WORKS, { variables: { title: searchVal } });

  const onChange = async (value: string) => {
    setSearchVal(value);
    await refetch({ title: value ?? "" });
  };

  const debounceOnChange = useCallback(debounce(onChange, 300), []);

  if (error) return <Text>Error</Text>;

  const works = data?.worksConnection;
  const hasNextPage = works?.pageInfo.hasNextPage;
  const endCursor = works?.pageInfo.endCursor;

  const renderFooter = () => (
    <View>
      {loading && <ActivityIndicator size="small" />}
      {hasNextPage && !loading && (
        <Text style={{ textAlign: "center" }}>Scroll for more</Text>
      )}
      {!hasNextPage && !loading && !data && (
        <Text>Darn, there are no more results</Text>
      )}
    </View>
  );

  return (
    <View style={{ paddingBottom: 100 }}>
      <TextInput onChange={(value) => debounceOnChange(value)} />
      <FlatList
        style={{ paddingBottom: 100 }}
        onEndReachedThreshold={0.2}
        onEndReached={
          hasNextPage
            ? () => {
                fetchMore({
                  variables: { after: endCursor },
                  updateQuery(previousQueryResult, { fetchMoreResult }) {
                    const newNodes = fetchMoreResult.worksConnection.nodes;
                    const pageInfo = fetchMoreResult.worksConnection.pageInfo;
                    const res = newNodes?.length
                      ? {
                          // Put the new comments at the end of the list and update `pageInfo`
                          // so we have the new `endCursor` and `hasNextPage` values
                          worksConnection: {
                            __typename:
                              previousQueryResult.worksConnection.__typename,
                            nodes: [
                              ...previousQueryResult.worksConnection.nodes,
                              ...newNodes,
                            ],
                            pageInfo,
                          },
                        }
                      : previousQueryResult;
                    return res;
                  },
                });
              }
            : undefined
        }
        data={works?.nodes}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => (
          <View>
            <Text>
              <Text>{item?.title}</Text>
              {item?.authors?.map((author) => (
                <Text key={author.name}>-{author.name}</Text>
              ))}
            </Text>
          </View>
        )}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};
