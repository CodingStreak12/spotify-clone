import Applayout from "../../Layout/Applayout";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Card from "../Card/Card";
function Home() {
  return (
    <Applayout>
      <div className="">
        {/* This is signup bar */}

        <div className="flex justify-between items-center py-3 px-8">
          <div className="flex gap-8 text-xl text-gray-300 opacity-75">
            <BsChevronLeft />
            <BsChevronRight />
          </div>

          <div className="flex gap-6 items-center">
            <button className=" bg-transparent text-gray-400 opacity-60 font-bold py-2 px-5 rounded-full">
              Sign up
            </button>

            <button className="bg-white text-black font-bold py-3 px-8 rounded-full">
              Log in
            </button>
          </div>
        </div>

        {/* This is the playlist and  */}
        <div>
          <div className="bg-tertiary pt-4">
            <div className="flex justify-between items-center px-4">
              <h2 className="text-xl font-bold opacity-80">
                Spotify Playlists
              </h2>
              <button className="opacity-80">Show all</button>
            </div>
            {/* Spotify Playlists */}
            <div className="grid grid-cols-5 gap-8 mt-5 px-8">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="pt-8 bg-secondary">
            <div className="flex justify-between items-center px-4">
              <h2 className="text-xl font-bold opacity-80">
                Great first audiobooks
              </h2>
              <button className="opacity-80">Show all</button>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-5 px-8">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="pt-8 bg-secondary">
            <div className="flex justify-between items-center px-4">
              <h2 className="text-xl font-bold opacity-80">
                Great first audiobooks
              </h2>
              <button className="opacity-80">Show all</button>
            </div>

            <div className="grid grid-cols-5 gap-8 mt-5 px-8">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Applayout>
  );
}

export default Home;
