import Conversations from "./Conversations.jsx";
const Conversation = () => {
  return (
    <>
      <div className="cursor-pointer flex  gap-3 items-center p-2 py-1  rounded-lg hover:bg-amber-900/30">
        <div className=" avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex  gap-3 justify-between">
            <p className="font-bold text-orange-800">John Doe</p>
            <span className="text-xl">🎃</span>
          </div>
        </div>
      </div>
      <div className="divider my-1 py-0 h-1"></div>
    </>
  );
};

export default Conversation;

// TODO // Starter code Snippet /////////////////

// import Conversations from "./Conversations.jsx";
// const Conversation = () => {
//   return (
//     <>
//       <div className="cursor-pointer flex  gap-3 items-center p-2 py-1  rounded-lg hover:bg-amber-900/30">
//         <div className=" avatar avatar-online">
//           <div className="w-12 rounded-full">
//             <img src="https://i.pravatar.cc/150?img=30" alt="avatar" />
//           </div>
//         </div>
//         <div className="flex flex-col flex-1">
//           <div className="flex  gap-3 justify-between">
//             <p className="font-bold text-orange-800">John Doe</p>
//             <span className="text-xl">🎃</span>
//           </div>
//         </div>
//       </div>
//       <div className="divider my-1 py-0 h-1"></div>
//     </>
//   );
// };

// export default Conversation;
