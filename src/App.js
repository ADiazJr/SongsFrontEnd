import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable";
import SearchBar from "./Components/SearchBar";
import CreateSongForm from "./Components/CreateSongForm";
import './App.css'

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  async function getAllSearchSongs(search){
    let filteredSongs = songs.filter(song => song.artist.includes(search) || song.title.includes(search) || song.album.includes(search) || song.release_date.includes(search) || song.genre.includes(search));
    setSongs(filteredSongs);
  }

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  async function deleteSong(index){
    let response = await axios.delete(`http://127.0.0.1:8000/api/music/${index}`);
    if(response.status === 204){
      await getAllSongs();
    }
  }

  return (
    <div>
      <h2 className="navigationbar">Music Library</h2>
      <h3 className="header">Song List</h3>
      <div className='search-bar'>
        <SearchBar getAllSearchSongs={getAllSearchSongs}/>
      </div>
      <div className="border-box" >
        <MusicTable songList={songs} deleteSong={deleteSong} />
      </div>
      <h3 className="header">Add Song</h3>
      <div className="border-box">
        <CreateSongForm  createSong={createSong} />
      </div>
    </div>
  );
}

export default App;
