import React, { useState } from "react";
import styles from "./Album.module.css";
import { AlbumInterface } from "../App";

const Album: React.FC<AlbumInterface> = ({ image, album, link, musics }) => {
  const [showMusics, setShowMusics] = useState(false);

  const clickHandler = () => {
    setShowMusics(!showMusics);
  };

  return (
    <div className={styles.app__album}>
      <div>
        <img
          className={styles.appAlbum__image}
          src={image}
          alt={album}
          onClick={clickHandler}
        />
        <div className={styles.appAlbum__label}>
          <p>{album}</p>
          <a href={link}>
            <img
              className={styles.appAlbumLabel__logo}
              src="images/spotify.webp"
              alt="spoty"
            />
          </a>
        </div>
      </div>
      <div className={styles.appAlbum__musics}>
        {showMusics &&
          musics.map((music, index) => <div key={index}>{music}</div>)}
      </div>
    </div>
  );
};

export default Album;
