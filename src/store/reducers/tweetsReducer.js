import React from "react";

import { GET_ALL_TWEETS ,ADD_POST} from "../actionTypes";

const defaultState = [];

export const tweetsReducer = (state = defaultState, action) => {
  const { type } = action;
  switch (type) {
    case GET_ALL_TWEETS:
      return {
        ...state,
        tweets: action.payload,
      };
		case ADD_POST:
			return{
				...state,
				tweet:	action.payload
			}
		}

  return state;
};
