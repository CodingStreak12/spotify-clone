import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { pauseSong, playSong } from "../../States/SongSlice";
function Card({ song }) {
  const dispatch = useDispatch();
  const { playingSong, isPlaying } = useSelector((store) => store.songs);

  function handlePlay(song) {
    dispatch(playSong(song));
  }
  function handlePause(song) {
    dispatch(pauseSong(song));
  }

  return (
    <div className="bg-card p-4 rounded-md cursor-pointer hover:bg-[#282828] transition-all card">
      <div className="relative h-48">
        <img
          src={song?.image}
          className=" rounded-lg h-full w-full object-fill object-center"
        />

        {isPlaying && playingSong.id === song.id ? (
          <button
            className="absolute text-4xl bg-green-500 text-black rounded-full w-14 h-14 flex justify-center items-center right-2 bottom-2 play-btn"
            onClick={() => handlePause(song)}
          >
            <BsPauseFill />
          </button>
        ) : (
          <button
            className="absolute text-4xl bg-green-500 text-black rounded-full w-14 h-14 flex justify-center items-center right-2 bottom-2 play-btn"
            onClick={() => handlePlay(song)}
          >
            <BsPlayFill />
          </button>
        )}
      </div>

      <div className="mt-4">
        <p className="font-bold opacity-90">{song?.title}</p>
        <p className="mt-2 opacity-40">{song?.artist}</p>
      </div>
    </div>
  );
}

export default Card;
