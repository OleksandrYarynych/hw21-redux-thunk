import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllTweets } from "../../store/actions/tweetsActions";
import { getAllUsers } from "../../store/actions/userActions";
import Tweet from "./Tweet";

import "./tweets.scss";

const Tweets = ({ content, img }) => {
  const dispatch = useDispatch();

  const handleAPICall = async () => {
    const res = await fetch("http://domer.tech:9999/tweets/");
    const data = await res.json();
    dispatch(getAllTweets(data.data));

    const userRes = await fetch("http://domer.tech:9999/users/");
    const userData = await userRes.json();
    dispatch(getAllUsers(userData.data));
  };

  useEffect(() => {
    handleAPICall();
  }, []);

  const tweets = useSelector((state) => state.tweetsReducer.tweets);
  const users = useSelector((state) => state.userReducer.users);

  return (
    <div>
      {tweets ? (
        Object.values(tweets).map((t) => {
          const id = t.userId;
          // console.log(Object.values(users))
          const user = users
            ? Object.values(users).find((u) => u.id === t.userId)
            : null;

          return (
            <Tweet
              key={t.id}
              content={t.content}
              img={t.image}
              avatar={user ? user.avatar : null}
              name={user ? user.name : null}
              userName={user ? user.username : null}
            />
          );
        })
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Tweets;
