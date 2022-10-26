import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable";
import SearchBar from "./Components/SearchBar";

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    console.log(response.data); 
  }

  async function getAllSearchSongs(search){
    let filteredSongs = songs.filter(song => song.artist.includes(search) || song.title.includes(search) || song.album.includes(search) || song.release_date.includes(search) || song.genre.includes(search));
    setSongs(filteredSongs);
  }

  return (
    <div>
      <SearchBar getAllSearchSongs={getAllSearchSongs}/>
      <MusicTable songList={songs} />
    </div>
  );
}

export default App;
