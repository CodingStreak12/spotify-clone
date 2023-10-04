/* eslint-disable react/prop-types */

import Sidebar from "../Components/Sidebar/Sidebar";
function Applayout({ children }) {
  return (
    <div className="flex gap-2">
      <Sidebar />

      <div className="w-3/4 border-s-white border">{children}</div>
    </div>
  );
}

export default Applayout;
