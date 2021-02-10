import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllUsers } from "../../store/actions/userActions";

import "./AddTweetsForm.scss";

const AddTweetsForm = () => {
  const [content, setContent] = useState("");
  const [imgSource, setImgSource] = useState("");
  const [chosenUser, setChosenUser] = useState("0");
  const dispatch = useDispatch();

  const handleAPICall = async () => {
    const userRes = await fetch("http://domer.tech:9999/users/");
    const userData = await userRes.json();
    console.log(users)
    dispatch(getAllUsers(userData.data));
  };

  useEffect(() => {
    handleAPICall();
  }, []);

  const users = useSelector((state) => state.userReducer.users);

  const addTweet = () => {
    if (content && imgSource) {
      const user = Object.values(users).find((u) => u.name === chosenUser);
      const tweet = {
        userId: user.id,
        content: content,
        imgSource: imgSource,
      };
      axios.post("http://domer.tech:9999/tweets/.", tweet);
      alert("tweet added");
      setContent("");
      setImgSource("");
      setChosenUser("0");
    }
  };

  return (
    <div className="add-user-form">
      <select onChange={(e) => setChosenUser(e.target.value)}>
        <option selected disabled>
          not chosen user
        </option>
        {users
          ? Object.values(users).map((u) => (
              <option name={u.id}>{u.name}</option>
            ))
          : null}
      </select>

      <input
        type="text"
        className="input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        className="input"
        value={imgSource}
        onChange={(e) => setImgSource(e.target.value)}
        placeholder="avatar link"
      />
      <button onClick={addTweet} className="btn">
        add user
      </button>
    </div>
  );
};

export default AddTweetsForm;
