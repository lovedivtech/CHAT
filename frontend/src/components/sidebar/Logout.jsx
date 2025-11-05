import React from "react";
import { GiExitDoor } from "react-icons/gi";
const Logout = () => {
  return (
    <div
      className="mt-auto flex items-center justify-center
     text-center font-bold text-xl p-3 bg-yellow-800/70 rounded-lg border hover:bg-base-200/70 hover:text-yellow-600 cursor-pointer "
    >
      <GiExitDoor /> Logout
    </div>
  );
};

export default Logout;

// TODO // Starter code Snippet /////////////////

// import { GiExitDoor } from "react-icons/gi";
// const Logout = () => {
//   return (
//     <div
//       className="mt-auto flex items-center justify-center
//      text-center font-bold text-xl p-3 bg-yellow-800/70 rounded-lg border hover:bg-base-200/70 hover:text-yellow-600 cursor-pointer "
//     >
//     >
//       <GiExitDoor /> Logout
//     </div>
//   );
// };

// export default Logout;
