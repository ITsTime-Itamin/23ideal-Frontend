import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SidebarFind from "./components/SidebarFind";
import SidebarSupport from "./components/SidebarSupport";
import SidebarCommunity from "./components/SidebarCommunity";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import CommunityCom from "./pages/Community/CommunityCom";
import CommunityJob from "./pages/Community/CommunityJob";
import CommunityFree from "./pages/Community/CommunityFree";
import CommunityNotice from "./pages/Community/CommunityNotice";
import Table from "./components/Table";

const App=()=>{

  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/CommunityCom" element={<CommunityCom/>}/>
        <Route path="/CommunityNotice" element={<CommunityNotice/>}/>
        <Route path="/CommunityFree" element={<CommunityFree/>}/>
        <Route path="/CommunityJob" element={<CommunityJob/>}/>


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
        <Route path="/CommuniyNotice" element={<Table/>}/>
      </Routes>
    </div>
  );
};

export default App;