import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../../store/actions/userActions";
import User from "./User";

const Users = () => {
  const dispatch = useDispatch();

  const handleAPICall = async () => {
    const res = await fetch("http://domer.tech:9999/users/");
    const data = await res.json();
    dispatch(getAllUsers(data.data));
  };

  useEffect(() => {
    handleAPICall();
  }, []);

  const users = useSelector((state) => state.userReducer.users);

  return (
    <div className="user-wrapper">
      {users ? (
        Object.values(users).map((u) => (
          <User
            key={u.id}
            avatar={u.avatar}
            name={u.name}
            userName={u.username}
          />
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Users;
