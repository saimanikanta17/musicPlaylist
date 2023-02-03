import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongCard = props => {
  const {track, changePlayList} = props
  const {id, imageUrl, name, genre, duration} = track

  const deleteSong = () => {
    changePlayList(id)
  }

  return (
    <li className="track">
      <img src={imageUrl} alt="track" className="image" />
      <div>
        <p>{name}</p>
        <p>{genre}</p>
      </div>
      <p>{duration}</p>
      <button
        type="button"
        onClick={deleteSong}
        className="btn"
        data-testid="delete"
      >
        <AiOutlineDelete size="14px" />
      </button>
    </li>
  )
}

export default SongCard
