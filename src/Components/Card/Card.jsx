import { BsPlayFill } from "react-icons/bs";
import "./Card.css";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="bg-card p-4 rounded-md cursor-pointer hover:bg-[#282828] transition-all card">
      <div className="relative">
        <img src="/assets/drake.jpg" className=" rounded-lg h-full w-full" />
        <Link className="absolute text-4xl bg-green-500 text-black rounded-full w-14 h-14 flex justify-center items-center right-2 bottom-2 play-btn">
          <BsPlayFill />
        </Link>
      </div>

      <div className="mt-4">
        <p className="font-bold opacity-90">RapCaviar</p>
        <p className="mt-2 opacity-40">
          New music from Turbo and Gunna, NAV and...
        </p>
      </div>
    </div>
  );
}

export default Card;
