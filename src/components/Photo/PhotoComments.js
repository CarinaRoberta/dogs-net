import React, { useContext, useState, useRef, useEffect } from "react";
import { userContext } from "../../context/userContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import style from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const { login } = useContext(userContext);
  const commentsSection = useRef(null);
  const [comments, setComments] = useState(() => props.comments);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={style.comments}>
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
