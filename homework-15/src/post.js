
import React from "react";
import { formatDate } from './func'

function Post({ author, date, content, image }) {
  return (
  <div className="post">

  <img className="photo" src={author.photo} />
  <div className="user">
    <div className="name"> {author.name} </div>
      <div className="info">
        <div className="nickname"> {author.nickname} </div>
        <div className="date"> {formatDate(date)} </div>
      </div>
  </div>

  <div className="content"> {content} </div>
  <img className="image" src={image} />

  </div>

  );
}

export default Post