import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SidebarFind from "./components/SidebarFind";
import SidebarSupport from "./components/SidebarSupport";
import SidebarCommunity from "./components/SidebarCommunity";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const App=()=>{

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
    </div>
  );
};

export default App;