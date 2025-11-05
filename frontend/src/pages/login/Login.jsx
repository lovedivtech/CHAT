import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4 sm:p-6">
      <div
        className="
          grid grid-cols-1 lg:grid-cols-2 
          border-opacity-80 shadow-2xl rounded-lg 
          bg-gray-900/20 backdrop-blur-sm
          w-full 
          max-w-[900px] xl:max-w-6xl 
          overflow-hidden
        "
      >
        {/* Left side - Login Form */}
        <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-20">
          <div className="w-full max-w-[500px] sm:max-w-[440px] ">
            <h1 className="text-3xl font-bold text-center text-amber-700 sm:text-4xl">
              LOGIN
              <span className="block text-orange-900/50 text-base sm:text-lg font-medium">
                Chat-Web-App
              </span>
            </h1>

            <form className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1 sm:mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/60 text-gray-800 border border-white/40 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:bg-white/80 transition text-sm sm:text-base"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1 sm:mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-lg bg-white/60 text-gray-800 border border-white/40 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:bg-white/80 transition text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 mt-4 text-base font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-amber-700/50"
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <p className="mt-6 text-center text-xs sm:text-sm text-white/70">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-amber-200 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Image section */}
        <div className="hidden lg:flex flex-col items-center justify-center border-l border-dark-700/50 py-10 px-10">
          <h2 className="text-3xl font-bold text-center text-amber-700 sm:text-4xl">
            Welcome Back!
            <span className="block text-orange-900/50 text-base sm:text-lg font-medium">
              Chat-Web-App
            </span>
          </h2>
          <img
            src="/login2.png"
            alt="Login"
            className="object-cover w-3/2 mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

// TODO // Starter code Snippet /////////////////

// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="flex items-center justify-center min-h-[80vh] p-4 sm:p-6">
//       <div
//         className="
//           grid grid-cols-1 lg:grid-cols-2
//           border-opacity-80 shadow-2xl rounded-lg
//           bg-gray-900/20 backdrop-blur-sm
//           w-full
//           max-w-[900px] xl:max-w-6xl
//           overflow-hidden
//         "
//       >
//         {/* Left side - Login Form */}
//         <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-20">
//           <div className="w-full max-w-[500px] sm:max-w-[440px] ">
//             <h1 className="text-3xl font-bold text-center text-amber-700 sm:text-4xl">
//               LOGIN
//               <span className="block text-orange-900/50 text-base sm:text-lg font-medium">
//                 Chat-Web-App
//               </span>
//             </h1>

//             <form className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
//               {/* Username */}
//               <div>
//                 <label className="block text-sm font-medium text-white/80 mb-1 sm:mb-2">
//                   Email:
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-2 rounded-lg bg-white/60 text-gray-800 border border-white/40 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:bg-white/80 transition text-sm sm:text-base"
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block text-sm font-medium text-white/80 mb-1 sm:mb-2">
//                   Password:
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full px-4 py-2 rounded-lg bg-white/60 text-gray-800 border border-white/40 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:bg-white/80 transition text-sm sm:text-base"
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full py-3 mt-4 text-base font-semibold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-amber-700/50"
//               >
//                 Login
//               </button>
//             </form>

//             {/* Footer */}
//             <p className="mt-6 text-center text-xs sm:text-sm text-white/70">
//               Don’t have an account?{" "}
//               <Link to="/signup" className="text-amber-200 hover:underline">
//                 Register
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* Right side - Image section */}
//         <div className="hidden lg:flex flex-col items-center justify-center border-l border-dark-700/50 py-10 px-10">
//           <h2 className="text-3xl font-bold text-center text-amber-700 sm:text-4xl">
//             Welcome Back!
//             <span className="block text-orange-900/50 text-base sm:text-lg font-medium">
//               Chat-Web-App
//             </span>
//           </h2>
//           <img
//             src="/login2.png"
//             alt="Login"
//             className="object-cover w-3/2 mt-6"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
