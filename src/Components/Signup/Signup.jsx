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

      <div className="mx-auto w-1/2 flex flex-col items-center pt-12 gap-10">
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

          <div className="">
            <label>What&apos;s your date of birth?</label>
            <div className="flex gap-2">
              <div className="">
                <label>Day</label>
                <input type="number" placeholder="DD" />
              </div>
              <div>
                <label>Month</label>
                <select>
                  {months.map((month) => (
                    <option value={month} key={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Year</label>
                <input type="number" placeholder="YYYY" />
              </div>
            </div>
          </div>

          <div>
            <label>What&apos;s your gender</label>
            <div>
              <input type="radio" />
              <label>Male</label>
            </div>

            <div className="flex flex-col gap-3">
              <input type="radio" />
              <label>Female</label>
            </div>
            <div className="flex flex-col gap-3">
              <input type="radio" />
              <label>Prefer not to say</label>
            </div>
          </div>

          <span>
            By clicking on sign up, you agree to Spotify&apos;s Terms and
            Conditions of Use
          </span>
          <span>
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see Spotify&apos;s Privacy Policy.
          </span>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
