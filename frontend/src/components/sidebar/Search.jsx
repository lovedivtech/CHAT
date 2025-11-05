import React from "react";
import { RiGlobalFill } from "react-icons/ri";

const Search = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-lg bg-white/60 text-gray-800 border border-white/40 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:bg-white/80 transition text-sm sm:text-base"
      />
      <button
        className="mt-auto flex items-center justify-center
     text-center font-bold text-xl p-3 bg-yellow-800/70 rounded-lg border hover:bg-base-200/70 hover:text-yellow-600 cursor-pointer"
      >
        <RiGlobalFill className="size-5 w-full text-amber-100/90" />
      </button>
    </form>
  );
};

export default Search;

// TODO // Starter code Snippet /////////////////

// import React from "react";
// import { RiGlobalFill } from "react-icons/ri";

// const Search = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-full px-4 py-2 rounded-lg bg-white/60 text-gray-800 border border-white/40 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:bg-white/80 transition text-sm sm:text-base"
//       />
//       <button className="p-3 rounded-full bg-amber-600 text-white hover:bg-amber-900 transition ">
//         <RiGlobalFill className="size-5 w-full text-amber-100/90" />
//       </button>
//     </form>
//   );
// };

// export default Search;
