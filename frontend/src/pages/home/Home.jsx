import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Chatarea from "../../components/chatarea/Chatarea.jsx";

const Home = () => {
  return (
    <div
      className="
          lg:flex lg:flex-row 
          border-opacity-50 shadow-2xl shadow-base-300 rounded-lg 
           backdrop-filter backdrop-blur-xs bg-gray-800/20
          w-full 
          max-w-[980px] xl:max-w-7xl 
          overflow-hidden
        "
    >
      {/* Left side - Home Content */}
      <Sidebar />
      {/* Right side - Chat Area */}
      <Chatarea />
    </div>
  );
};

export default Home;

// TODO // Starter code Snippet /////////////////

// import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar.jsx";
// import Chatarea from "../../components/chatarea/Chatarea.jsx";

// const Home = () => {
//   return (
//     <div
//       className="
//           lg:flex lg:flex-row
//           border-opacity-50 shadow-2xl shadow-base-300 rounded-lg
//            backdrop-filter backdrop-blur-xs bg-gray-800/30
//           w-full
//           max-w-[900px] xl:max-w-6xl
//           overflow-hidden
//         "
//     >
//       {/* Left side - Home Content */}
//       <Sidebar />
//       {/* Right side - Chat Area */}
//       <Chatarea />
//     </div>
//   );
// };

// export default Home;
