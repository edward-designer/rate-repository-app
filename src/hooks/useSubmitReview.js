import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { SUBMIT_REVIEW } from "../graphql/mutations";

const useSubmitReview = () => {
  const navigate = useNavigate();

  const [mutateFn] = useMutation(SUBMIT_REVIEW);
  const submit = async ({ repositoryName, ownerName, rating, text }) => {
    rating = parseInt(rating);
    try {
      const { data } = await mutateFn({
        variables: { review: { repositoryName, ownerName, rating, text } },
      });
      console.log(data);
      navigate(`Repository/${ownerName}.${repositoryName}`);
    } catch (e) {
      throw e.message;
    }
  };
  return [submit];
};

export default useSubmitReview;
