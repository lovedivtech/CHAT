import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className=" p-4 h-screen flex items-center justify-center ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

// TODO // Starter code Snippet /////////////////

// import { useState } from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Signup from "./pages/signup/Signup";
// import Login from "./pages/login/Login";
// import Home from "./pages/home/Home";

// function App() {
//   const [user, setUser] = useState(null);

//   return (
//     <div className=" p-4 h-screen flex items-center justify-center ">
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
