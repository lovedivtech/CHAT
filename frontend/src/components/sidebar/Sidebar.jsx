import React from "react";
import Search from "./Search.jsx";
import Conversations from "./Conversations.jsx";
import Logout from "./Logout.jsx";
const Sidebar = () => {
  return (
    <div className="p-4 lg:w-3/9 border-r-2 ">
      <Search />
      <div className="divider divider-default px-3 "></div>
      <div className=" h-120 ">
        <Conversations />
      </div>
      <div className="m-3">
        {" "}
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;

// TODO // Starter code Snippet /////////////////
// import React from "react";
// import Search from "./Search.jsx";
// import Conversations from "./Conversations.jsx";
// import Logout from "./Logout.jsx";
// const Sidebar = () => {
//   return (
//     <div className="p-4 lg:w-3/9 border-r-2 ">
//       <Search />
//       <div className="divider divider-default px-3 "></div>
//       <div className=" h-120 ">
//         <Conversations />
//       </div>
//       <div className="m-3">
//         {" "}
//         <Logout />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
