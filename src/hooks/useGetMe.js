import { useQuery } from "@apollo/client";

import { GET_ME } from "../graphql/queries";

const useGetMe = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_ME, {
    ...variables,
  });
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  const reviews = data?.me?.reviews;
  const isLoggedIn = data?.me?.username !== undefined;

  return {
    isLoggedIn,
    reviews,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useGetMe;
