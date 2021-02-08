import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { addUser } from "../../store/actions/userActions";

import "./AddUserForm.scss";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();

  const adduser = () => {
    if (name && userName && avatar) {
      setUserName("@" + name);

      const user = {
        name: name,
        username: userName,
        avatar: avatar,
      };

      axios.post(" http://domer.tech:9999/users/", user);
      setName("");
      setUserName("");
      setAvatar("");
      alert("user added");
    }
  };

  return (
    <div className="add-user-form">
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        className="input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        className="input"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="avatar link"
      />
      <button onClick={adduser} className="btn">
        add user
      </button>
    </div>
  );
};

export default AddUserForm;
