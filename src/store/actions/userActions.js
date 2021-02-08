import { GET_ALL_USERS, ADD_USER } from "../actionTypes";

export const getAllUsers = (data) => ({
  type: GET_ALL_USERS,
  payload: {
    ...data,
  },
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: {
    user,
  },
});
