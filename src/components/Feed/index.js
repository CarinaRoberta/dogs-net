import React, { useState } from "react";
import FeedModals from "./components/FeedModals";
import FeedPhotos from "./components/FeedPhotos";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  return (
    <div>
      {modalPhoto && (
        <FeedModals photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
