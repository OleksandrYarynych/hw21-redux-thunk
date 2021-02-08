import React from "react";

import "./Users.scss";

const User = ({ avatar, name, userName }) => {
  return (
    <div className="user">
      <div className="img-block">
        <img className="img" src={avatar} />
      </div>
      <span>{name}</span>
      <span>{userName}</span>
    </div>
  );
};

export default User;
