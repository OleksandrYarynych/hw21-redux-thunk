import React from "react";

import "./tweets.scss";

const Tweet = ({ content, img, avatar, name, userName }) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="avatar">
          <img className="img" src={avatar} />
        </div>
        <div>
          <p className="user-data">{name}</p>
          <p className="user-data">{userName}</p>
        </div>
      </div>
      <div className="post__img">
        <img src={img} />
      </div>
      <div className="post__footer">{content}</div>
    </div>
  );
};

export default Tweet;
