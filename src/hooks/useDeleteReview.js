import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutateFn, result] = useMutation(DELETE_REVIEW, {
    refetchQueries: ["getCurrentUser"],
  });
  const deleteReview = async (id) => {
    await mutateFn({
      variables: { deleteReviewId: id },
    });
  };
  return [deleteReview, result];
};

export default useDeleteReview;
