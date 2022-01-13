import React, { useContext, useState } from "react";
import { userContext } from "../../context/userContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import style from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const { login } = useContext(userContext);
  const [comments, setComments] = useState(() => props.comments);

  return (
    <>
      <ul className={style.comments}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
