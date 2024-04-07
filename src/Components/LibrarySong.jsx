import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  song,
  audioRef,
  isPlaying,
  setSongs,
  active,
  songs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);

    //Play audio
    playAudio(isPlaying, audioRef);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${active ? "selected" : ""}`}
    >
      <img src={cover} alt="" />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
