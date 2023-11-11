/* eslint-disable react/prop-types */
import "./Applayout.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import Signup from "../Components/Sidebar/Signup";

function Applayout({ children }) {
  return (
    <div className="theme">
      <div className="">
        <Sidebar />
      </div>

      <div className=" overflow-auto">{children}</div>
      <div className="grid-col-span-2">
        <Signup />
      </div>
    </div>
  );
}

export default Applayout;
