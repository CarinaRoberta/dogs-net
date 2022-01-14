import React from "react";
import Image from "../../Image/Image";
import style from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={style.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={style.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
