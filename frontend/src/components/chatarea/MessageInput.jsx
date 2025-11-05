import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
const MessageInput = () => {
  return (
    <form className="flex items-center h-full gap-4">
      <input
        type="text"
        placeholder="Message here..."
        className=" size-full px-4 py-2 rounded-lg bg-white/70 text-gray-800 border border-white/40 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:bg-white/80 transition text-2xl sm:text-base"
      />
      <button
        className="
      bg-yellow-800/70 h-full p-4  rounded-lg border hover:bg-base-200/70 hover:text-yellow-600 cursor-pointer"
      >
        <RiSendPlaneFill className="size-full w-full" />
      </button>
    </form>
  );
};

export default MessageInput;

// TODO // Starter code Snippet /////////////////
// import React from "react";
// import { RiSendPlaneFill } from "react-icons/ri";
// const MessageInput = () => {
//   return (
//     <form className="flex items-center h-full gap-4">
//       <input
//         type="text"
//         placeholder="Message here..."
//         className=" size-full px-4 py-2 rounded-lg bg-white/70 text-gray-800 border border-white/40 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:bg-white/80 transition text-2xl sm:text-base"
//       />
//       <button className="p-3 h-full rounded-lg bg-amber-700 text-white hover:bg-amber-900 transition ">
//         <RiSendPlaneFill className="size-full w-full text-amber-100/90" />
//       </button>
//     </form>
//   );
// };

// export default MessageInput;
