import { Link } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function Signup() {
  return (
    <div className="">
      {/* This is the whole signup box */}

      <div className="mx-auto w-1/2 flex flex-col items-center pt-12 pb-8 gap-10">
        <Link to="/" className="flex items-center gap-4">
          <BsSpotify className="text-4xl" />

          <span className="text-2xl font-semibold">Spotify</span>
        </Link>

        <h1 className="text-4xl">Sign up for free to start listening</h1>

        <div className="border border-gray-500 w-full"></div>

        <span className="font-bold text-lg">
          Sign up with your email address
        </span>

        <form className="flex flex-col gap-4 w-1/2">
          <div className="flex flex-col gap-3">
            <label>What&apos;s your email?</label>
            <input
              type="email"
              placeholder="Enter your email."
              className="bg-[#2a2a2a] placeholder:text-white placeholder:opacity-80 text-lg py-2 px-3 w-full rounded-md ring-2 ring-[#414141] hover:ring-white focus:ring-4"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>Create a password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="bg-[#2a2a2a] placeholder:text-white placeholder:opacity-80 text-lg py-2 px-3 w-full rounded-md ring-2 ring-[#414141] hover:ring-white focus:ring-4"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label>What should we call you?</label>
            <input
              type="text"
              placeholder="Enter a profile name"
              className="bg-[#2a2a2a] placeholder:text-white placeholder:opacity-80 text-lg py-2 px-3 w-full rounded-md ring-2 ring-[#414141] hover:ring-white focus:ring-4"
            />
            <span>This appears on your profile.</span>
          </div>

          <div className="w-full">
            <label>What&apos;s your date of birth?</label>
            <div className="flex gap-3 w-full">
              <div className="flex-1 flex flex-col gap-4 mt-4">
                <label>Day</label>
                <input
                  type="number"
                  placeholder="DD"
                  className="w-full bg-[#2a2a2a] placeholder:text-white placeholder:opacity-80 text-lg py-2 px-3 rounded-md ring-2 ring-[#414141] hover:ring-white focus:ring-4"
                />
              </div>
              <div className="flex-[2] flex flex-col gap-4 mt-4">
                <label>Month</label>
                <select className=" w-full bg-[#2a2a2a] placeholder:text-white placeholder:opacity-80 text-lg py-2 px-3 rounded-md ring-2 ring-[#414141] hover:ring-white focus:ring-4">
                  {months.map((month) => (
                    <option value={month} key={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 flex flex-col gap-4 mt-4">
                <label>Year</label>
                <input
                  type="number"
                  placeholder="YYYY"
                  className="w-full bg-[#2a2a2a] placeholder:text-white placeholder:opacity-80 text-lg py-2 px-3 rounded-md ring-2 ring-[#414141] hover:ring-white focus:ring-4"
                />
              </div>
            </div>
          </div>

          <div className="">
            <label>What&apos;s your gender</label>
            <div className="flex gap-6 mt-3">
              <div className="flex gap-2 items-center">
                <input type="radio" name="gender" value="male" />
                <label>Male</label>
              </div>

              <div className="flex gap-2 items-center">
                <input type="radio" name="gender" value="female" />
                <label>Female</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="gender" value="na" />
                <label>Prefer not to say</label>
              </div>
            </div>
          </div>

          <span className="text-xs mt-7">
            By clicking on sign up, you agree to Spotify&apos;s Terms and
            Conditions of Use
          </span>
          <span className="text-xs">
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see Spotify&apos;s Privacy Policy.
          </span>

          <button
            type="submit"
            className="mx-auto my-4 w-1/2 text-lg font-bold py-3 bg-[#1ed760] text-black  rounded-full hover:scale-x-105 hover:bg-[#1ef067]"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
