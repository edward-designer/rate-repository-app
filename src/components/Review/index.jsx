import { Formik } from "formik";
import * as yup from "yup";

import ReivewForm from "./ReviewForm";

import useSubmitReview from "../../hooks/useSubmitReview";

const validationSchema = yup.object().shape({
  repositoryName: yup.string().required("This field is required"),
  ownerName: yup.string().required("This field is required"),
  rating: yup
    .number()
    .min(0, "Must be at least 0")
    .max(100, "Must be at most 100")
    .required("This field is required"),
});

const Review = () => {
  const [submit] = useSubmitReview();
  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    const { repositoryName, ownerName, rating, text } = values;
    try {
      await submit({ repositoryName, ownerName, rating, text });
    } catch (e) {
      setFieldError(
        "repositoryName",
        "Sorry, you have already submitted a comment for this repository"
      );
    } finally {
      setSubmitting(false);
    }
  };
  const initialValues = {
    repositoryName: "",
    ownerName: "",
    rating: "",
    text: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReivewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Review;
