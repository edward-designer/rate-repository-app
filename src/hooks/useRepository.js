import { useQuery } from "@apollo/client";

import { GET_SINGLE_REPOSITORY } from "../graphql/queries";

const useRepository = (repositoryId) => {
  const { data, error, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { repositoryId },
    skip: !repositoryId,
    fetchPolicy: "cache-and-network",
  });
  const repository = data?.repository;
  return { repository, error, loading };
};

export default useRepository;
