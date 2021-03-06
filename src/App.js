import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
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
import Editor from "./components/write/Editor";
import PostRead from "./components/read/PostRead";
import PostComment from "./components/read/PostComment";
import EditPost from "./components/write/EditPost";
import ScrapPosts from "./components/ScrapPosts";
import Calculator from "./pages/Calculator";
//import Categories from "./pages/Home/Categories";

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

        <Route path="/SupportBank" element={<SupportBank/>}/>
        <Route path="/SupportGov" element={<SupportGov/>}/>
        <Route path="/SupportLiving" element={<SupportLiving/>}/>
        <Route path="/SupportLoan" element={<SupportLoan/>}/>
        
        <Route path="/FindAll" element={<FindAll/>}/>
        <Route path="/FindHappy" element={<FindHappy/>}/>
        <Route path="/FindRent" element={<FindRent/>}/>
        <Route path="/FindYoung" element={<FindYoung/>}/>

        <Route path="/PostRead" element={<PostRead/>}/>
        <Route path="/PostComment" element={<PostComment/>}/>

        <Route path="/Editor" element={<Editor/>}/>
        <Route path="/EditPost" element={<EditPost/>} />

        <Route path="/ScrapPosts" element={<ScrapPosts/>} />

        <Route path="Customized" element={<Calculator/>}/>

      </Routes>
    </div>
  );
};

export default App;