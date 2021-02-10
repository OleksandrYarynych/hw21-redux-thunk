import { GET_ALL_TWEETS, ADD_POST } from "../actionTypes";

export const getAllTweets = (data) => ({
  type: GET_ALL_TWEETS,
  payload: {
    ...data,
  },
});

export const addPost = (data) => ({
  type: ADD_POST,
  payload: {
    data,
  },
});
