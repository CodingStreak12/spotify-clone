import { BsSpotify, BsSearch } from "react-icons/bs";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    //Complete sidebar div
    <div>
      {/* Wrapper for the sidebar nav */}
      <nav className="px-2 py-1">
        {/* First part of the side bar logo home search etc */}
        <div className=" bg-secondary rounded-md py-6 px-4 flex flex-col gap-6 mb-2">
          <div className="flex items-center gap-4">
            <BsSpotify className="text-2xl" />
            <span className="text-lg font-semibold">Spotify</span>
          </div>

          <div className="flex items-center gap-4">
            <AiFillHome className="text-2xl" />
            <span className="text-lg font-bold">Home</span>
          </div>

          <div className="flex items-center gap-4 opacity-75">
            <BsSearch className="text-2xl" />
            <span className="text-lg font-semibold">Search</span>
          </div>
        </div>

        {/* Library Playlist part*/}
        <div className="bg-secondary rounded-md py-6 px-6">
          {/* */}
          <div className="flex justify-between items-center opacity-75">
            <h2 className="flex items-center gap-3 ">
              <BiLibrary className="text-2xl" />
              <span className="text-xl font-bold">Your Library</span>
            </h2>
            <AiOutlinePlus className="text-2xl" />
          </div>

          <div className="bg-secondary mt-6 h-80 overflow-auto scrollbar">
            {/*  */}
            <div className=" bg-tertiary rounded-lg py-5 px-4 mb-6">
              <h2 className="text-lg font-bold mb-4">
                Create your first playlist
              </h2>
              <p className="font-semibold opacity-90 mb-7">
                It&apos;s easy, we&apos;ll help you
              </p>
              <Link className="bg-white text-black font-bold py-2 px-5 rounded-full">
                Create playlist
              </Link>
            </div>

            <div className=" bg-tertiary rounded-lg py-5 px-4 ">
              <h2 className="text-lg font-bold mb-4">
                Let&apos;s find some podcasts to follow
              </h2>
              <p className="font-semibold opacity-90 mb-7">
                We&apos;ll keep you updated on new episodes
              </p>
              <Link className="bg-white text-black font-bold py-2 px-5 rounded-full">
                Browse podcasts
              </Link>
            </div>

            {/* This is legal links */}
            <div></div>
          </div>

          {/* Div for legals */}
          <div className="mt-10 flex flex-wrap gap-4 opacity-75 ">
            <span>Legal</span>
            <span> Privacy Center</span>
            <span>Privacy Policy</span>
            <span>Cookies</span>
            <span>About Ads</span>
            <span>Accessibility</span>
          </div>

          <button className="flex items-center gap-1 font-semibold border rounded-full px-2 py-1 mt-8">
            <FiGlobe />
            English
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
