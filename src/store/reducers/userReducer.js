import React from "react";
import { GET_ALL_USERS, ADD_USER } from "../actionTypes";

const initialState = [];

export const userReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: action.payload,
      };
  }

  return state;
};
