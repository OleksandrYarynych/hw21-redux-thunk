import React from  'react'
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

import {userReducer} from "./store/reducers/userReducer";
import {tweetsReducer} from "./store/reducers/tweetsReducer";

const reducer =combineReducers({
	userReducer,
	tweetsReducer
})

const store =createStore(
	reducer,
	applyMiddleware(thunk)
)

export default store