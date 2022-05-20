import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login.js";
import { useState } from "react";
import axios from "axios";
import FindAll from "./components/FindAll";
import FindHappy from "./components/FindHappy";
import FindYoung from "./components/FindYoung";
import FindRent from "./components/FindRent";
import Sidebar from "./components/Sidebar";

const App=()=>{

  const [data,setData]=useState(null);
  const onClick=()=>{
    axios.get('/api/v1/houses').then(response=>{setData(response.data);});
  };

  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/FindAll" element={<FindAll />}/>
        <Route path="/FindYoung" element={<FindYoung />}/>
        <Route path="/FindHappy" element={<FindHappy />}/>
        <Route path="/FindRent" element={<FindRent />}/>
      </Routes>
      
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data&&<textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true} />}
      <div className="container">
      </div>
    </div>

    
  );
};

export default App;