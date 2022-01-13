import React, { useState } from "react";
import { COMMENT_POST } from "../../api/api";
import { ReactComponent as Enviar } from "../../assets/enviar.svg";
import useFetch from "../../hooks/useFetch";
import Error from "../Error";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
      {error && <Error error={error} />}
    </form>
  );
};

export default PhotoCommentsForm;