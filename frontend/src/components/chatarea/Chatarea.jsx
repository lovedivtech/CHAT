import React from "react";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
const Chatarea = () => {
  return (
    <div className=" w-full hidden lg:flex  lg:flex-col ">
      <div className="bg-base-200/60 text-stone-50 px-4 flex gap-3 py-3 rounded justify-start items-center  ">
        <div className=" avatar avatar-online">
          <div className="w-12 rounded-full border-2 border-amber-50">
            <img src="https://i.pravatar.cc/150?img=36" alt="avatar" />
          </div>
        </div>
        <span className="font-bold  text-2xl">David France</span>
      </div>
      <div className="h-120 grid m-2 ">
        <Messages />
      </div>
      <div className="m-3 h-full">
        <MessageInput />
      </div>
    </div>
  );
};

export default Chatarea;

// TODO // Starter code Snippet /////////////////

// import React from "react";
// import Messages from "./Messages.jsx";
// import MessageInput from "./MessageInput.jsx";
// const Chatarea = () => {
//   return (
//     <div className=" w-full hidden lg:flex  lg:flex-col ">
//       <div className="bg-base-200/60 text-stone-50 px-4 flex gap-3 py-3 rounded justify-start items-center  ">
//         <div className=" avatar avatar-online">
//           <div className="w-12 rounded-full border-2 border-amber-50">
//             <img src="https://i.pravatar.cc/150?img=36" alt="avatar" />
//           </div>
//         </div>
//         <span className="font-bold  text-2xl">David France</span>
//       </div>
//       <div className="h-120 grid m-2 ">
//         <Messages />
//       </div>
//       <div className="m-3 h-full">
//         <MessageInput />
//       </div>
//     </div>
//   );
// };

// export default Chatarea;
