import React, { useEffect } from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../../hooks/useFetch";
import { PHOTOS_GET } from "../../../api/api";
import Error from "../../../components/Error";
import Loading from "../../Loading";
import style from "./FeedPhotos.module.css";

const FeedPhotos = ({ user, setModalPhoto, page, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total: 3, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${style.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default FeedPhotos;
