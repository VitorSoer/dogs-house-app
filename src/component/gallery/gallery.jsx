import React, { useEffect, useState } from "react";
import axios from "axios";
import { GalleryStyle } from "./styles/gallery.styles";

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dogs-house-data.herokuapp.com/photos`)
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <GalleryStyle>
      {photos.map(({ _id, url }, i) => (
        <div key={_id} className={`p-${i + 1} image`}>
          <img alt="gallery photos" src={url} />
        </div>
      ))}
    </GalleryStyle>
  );
}

export default Gallery;
