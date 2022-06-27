import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SidebarFind from "./components/SidebarFind";
import SidebarSupport from "./components/SidebarSupport";
import SidebarCommunity from "./components/SidebarCommunity";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { useState } from "react";
import axios from "axios";

const App=()=>{

  const [data,setData]=useState(null);
  const onClick=()=>{
    axios.get('http://localhost:3000/api/v1/houses').then(response=>{setData(response.data);});
  };

  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>

        <Route path="/FindAll" element={<SidebarFind />}/>
        <Route path="/FindHappy" element={<SidebarFind />}/>
        <Route path="/FindRent" element={<SidebarFind/>}/>
        <Route path="/FindYoung" element={<SidebarFind/>}/>

        <Route path="/SupportGov" element={<SidebarSupport />}/>
        <Route path="/SupportBank" element={<SidebarSupport/>}/>
        <Route path="/SupportLiving" element={<SidebarSupport />}/>
        <Route path="/SupportLoan" element={<SidebarSupport />}/>

        <Route path="/CommunityCom" element={<SidebarCommunity />}/>
        <Route path="/CommunityFree" element={<SidebarCommunity />}/>
        <Route path="/CommunityJob" element={<SidebarCommunity />}/>
        <Route path="/CommunityNotice" element={<SidebarCommunity />}/>
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