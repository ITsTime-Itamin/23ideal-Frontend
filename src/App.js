import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SidebarFind from "./components/SidebarFind";
import SidebarSupport from "./components/SidebarSupport";
import SidebarCommunity from "./components/SidebarCommunity";
import SupportBank from "./pages/Support/SupportBank";
import SupportGov from "./pages/Support/SupportGov";
import SupportLiving from "./pages/Support/SupportLiving";
import SupportLoan from "./pages/Support/SupportLoan";
import FindAll from "./pages/Find/FindAll";
import FindHappy from "./pages/Find/FindHappy";
import FindRent from "./pages/Find/FindRent";
import FindYoung from "./pages/Find/FindYoung";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import CommunityCom from "./pages/Community/CommunityCom";
import CommunityJob from "./pages/Community/CommunityJob";
import CommunityFree from "./pages/Community/CommunityFree";
import CommunityNotice from "./pages/Community/CommunityNotice";
import Table from "./components/Table";
import FreeEditor from "./components/write/FreeEditor";
import ComEditor from "./components/write/ComEditor";
import NoticeEditor from "./components/write/NoticeEditor";
import JobEditor from "./components/write/JobEditor";
import AllEditor from "./components/write/AllEditor";
import HappyEditior from "./components/write/HappyEditior";
import YoungEditor from "./components/write/YoungEditor";
import Editor from "./components/write/Editor";
import GovEditor from "./components/write/GovEditor";
import BankEditor from "./components/write/BankEditor";
import LoanEditor from "./components/write/LoanEditor";

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
      

        <Route path="SupportBank" element={<SupportBank/>}/>
        <Route path="SupportGov" element={<SupportGov/>}/>
        <Route path="SupportLiving" element={<SupportLiving/>}/>
        <Route path="SupportLoan" element={<SupportLoan/>}/>
        

        <Route path="FindAll" element={<FindAll/>}/>
        <Route path="FindHappy" element={<FindHappy/>}/>
        <Route path="FindRent" element={<FindRent/>}/>
        <Route path="FindYoung" element={<FindYoung/>}/>

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

        <Route path="/FreeEditor" element={<FreeEditor/>}/>
        <Route path="/ComEditor" element={<ComEditor/>}/>
        <Route path="/JobEditor" element={<JobEditor/>}/>
        <Route path="/NoticeEditor" element={<NoticeEditor/>}/>

        <Route path="/AllEditor" element={<AllEditor/>}/>
        <Route path="/YoungEditor" element={<YoungEditor/>}/>
        <Route path="/Editor" element={<Editor/>}/>
        <Route path="/HappyEditior" element={<HappyEditior/>}/>

        <Route path="/GovEditor" index element={<GovEditor/>}></Route>
        <Route path="/BankEditor" element={<BankEditor/>}/>
        <Route path="/LoanEditor" element={<LoanEditor/>}/>

      </Routes>
    </div>
  );
};

export default App;