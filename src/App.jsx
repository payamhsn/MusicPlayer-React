import React, { useState } from "react";
import "./styles/app.scss";
import data from "./data";

//Import Components
import Player from "./Components/Player";
import Song from "./Components/Song";

function App() {
  //States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songs={songs}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;
