import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"
import Home from "./components/Home";
import Login from "./components/Login.js";
import { useState } from "react";
import axios from "axios";

const App=()=>{

  const [data,setData]=useState(null);
  const onClick=()=>{
    axios.get('http://localhost:8080/api/v1/houses').then(response=>{setData(response.data);});
  };

  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/FindAll" element={<Sidebar />}/>
        <Route path="/FindHappy" element={<Sidebar />}/>
        <Route path="/FindRent" element={<Sidebar />}/>
        <Route path="/FindYoung" element={<Sidebar />}/>


        
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