import React from "react";

const LibrarySong = ({
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  song,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then((audio) => {
            audioRef.current.play();
          })
          .catch((error) => console.log(error));
      }
    }
  };
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={cover} alt="" />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
