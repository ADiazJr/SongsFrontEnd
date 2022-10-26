import { useState } from 'react'

const CreateSongForm = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album, 
            release_date: releaseDate,
            genre: genre,
        }
        props.createSong(newSong);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='string' value={title} onChange={(event) => setTitle(event.target.value)} />
            <label>Artist</label>
            <input type='string' value={artist} onChange={(event) => setArtist(event.target.value)} />
            <label>Album</label>
            <input type='string' value={album} onChange={(event) => setAlbum(event.target.value)} />
            <label>Release Date</label>
            <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
            <label>Genre</label>
            <input type='string' value={genre} onChange={(event) => setGenre(event.target.value)} />
            <input type='submit' value='Submit' />
        </form>
     );
}
 
export default CreateSongForm;