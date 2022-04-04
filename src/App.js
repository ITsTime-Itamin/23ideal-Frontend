import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Community from "./components/Community";
import Login from "./components/Login.js";

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Community" element={<Community />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </div>
  );
};

export default App;