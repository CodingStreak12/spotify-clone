import { BsSpotify } from "react-icons/bs";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="bg-gradient-to-b from-[#191919] to-[#080808]">
      {/* This is the header */}
      <Link to="/">
        <div className="flex gap-1 items-center bg-black py-8 px-12">
          <BsSpotify className="text-4xl" />

          <span className="text-2xl font-semibold">Spotify</span>
        </div>
      </Link>

      {/* This is the login form */}

      <div className="bg-black w-3/5 mx-auto mt-14 flex flex-col items-center pt-24 px-28 gap-8 rounded-md">
        <h1 className="text-5xl font-semibold">Log in to Spotify</h1>

        <div className="w-full border-t border-gray-500 opacity-60"></div>

        <form className="flex flex-col gap-4 w-2/5">
          <div className="flex flex-col gap-2">
            <label>Email or username</label>
            <input
              type="email"
              placeholder="Email or username"
              className="bg-[#2a2a2a] placeholder:text-white placeholder:opacity-80 text-lg py-2 px-3 w-full rounded-md ring-2 ring-[#414141] hover:ring-white focus:ring-4"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="bg-[#2a2a2a] placeholder:text-white placeholder:opacity-80 text-lg py-2 px-3 w-full rounded-md ring-2 ring-[#414141] hover:ring-white focus:ring-4"
            />
          </div>

          <button className="text-lg font-bold bg-[#1ed760] text-black py-3 px-10 rounded-full mt-8 hover:scale-x-105 hover:bg-[#1ef067]">
            Log In
          </button>
        </form>

        <Link className="underline font-semibold">Forgot your passsword?</Link>

        <div className="w-full border-t border-gray-500 opacity-60"></div>

        <span>
          <span className="opacity-70">Don&apos;t have an account? </span>
          <Link to="/signup" className="underline font-semibold">
            Sign up for Spotify
          </Link>
        </span>

        <span className=" text-xs opacity-70">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </span>
      </div>
    </div>
  );
}

export default Login;
