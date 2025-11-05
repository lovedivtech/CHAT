import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
          />
        </div>
      </div>
      <div className="chat-bubble bg-yellow-900/80 text-stone-50">
        Hello, how can I help you today?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 text-amber-900 font-bold items-center">
        12:45
      </div>
    </div>
  );
};

export default Message;

// TODO // Starter code Snippet /////////////////

// import React from "react";

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="avatar chat-image">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS chat bubble component"
//             src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
//           />
//         </div>
//       </div>
//       <div className="chat-bubble bg-yellow-900/80 text-stone-50">
//         Hello, how can I help you today?
//       </div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 text-amber-900 font-bold items-center">
//         12:45
//       </div>
//     </div>
//   );
// };

// export default Message;
