import { useState } from 'react'

const MusicTable = (props) => {

    const [currentSong, setCurrentSong] = useState({})

    function handleSubmit(index){
        props.deleteSong(index)
    }

    return (
        <form>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.songList.map((song, index) => {
                    return (
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <input type='submit' value='Delete' onSubmit={(index) => handleSubmit(index)} />
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </form>
      );
}
 
export default MusicTable;