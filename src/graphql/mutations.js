import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const SIGNUP = gql`
  mutation Authenticate($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
    }
  }
`;

export const SUBMIT_REVIEW = gql`
  mutation Mutation($review: CreateReviewInput!) {
    createReview(review: $review) {
      createdAt
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation Mutation($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`;
