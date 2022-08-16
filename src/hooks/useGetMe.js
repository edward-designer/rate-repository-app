import { useQuery } from "@apollo/client";

import { GET_ME } from "../graphql/queries";

const useGetMe = () => {
  const { data, error, loading } = useQuery(GET_ME);
  const isLoggedIn = data?.me?.username !== undefined;
  return { isLoggedIn, error, loading };
};

export default useGetMe;
