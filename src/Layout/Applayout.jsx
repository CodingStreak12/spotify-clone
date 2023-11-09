/* eslint-disable react/prop-types */
import "./Applayout.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import Signup from "../Components/Sidebar/Signup";

function Applayout({ children }) {
  return (
    <div className="theme">
      <div>
        <Sidebar />
      </div>

      <div>{children}</div>
      <div>
        <Signup />
      </div>
    </div>
  );
}

export default Applayout;
