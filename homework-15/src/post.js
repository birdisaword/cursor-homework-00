
import React from "react";

function formatDate(date) {
  return date.toLocaleDateString();
}

function Post(props) {
  return (
  <div className="post">

  <img className="photo" src={props.author.photo} />
  <div className="user">
    <div className="name"> {props.author.name} </div>
      <div className="info">
        <div className="nickname"> {props.author.nickname} </div>
        <div className="date"> {formatDate(props.date)} </div>
      </div>
  </div>

  <div className="content"> {props.content} </div>
  <img className="image" src={props.image} />

  </div>

  );
}

export default Post