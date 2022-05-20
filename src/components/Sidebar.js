import { Link } from "react-router-dom";
import "./Sidebar.css"

 const Sidebar = () => {
     return (
         <div className="sidebar"> 
             <li>
                 <Link to = "/FindAll">모집공고 전체보기</Link>
             </li>
            <li>
                 <Link to = "/FindYoung"> 청년주택 </Link>
             </li>
             <li>
                 <Link to = "/FindHappy">행복주택</Link>
             </li>
             <li>
                 <Link to = "/FindRent">임대주택</Link>
             </li>
        </div>
     )
 }
// import { Link } from "react-router-dom";
// // import{link} from "react-router-dom"
// // import SidebarItem from "./SidebarItem";
// import "./Sidebar.css"

// // const Sidebar = () => {
// //     return (
// //         <div className="sidebar">
// //             <div className="sidebarTop">
// //             <br></br>
// //             <br></br>
// //             <br></br>
// //             <br></br>
// //             <br></br>
// //             <br></br>
// //             </div>
            
// //             <ul>
// //                 <li className="sidebarTitle"> 
// //                     <link to = "/FindAll" >모집공고 전체 보기</link>
// //                 </li>
// //                 <li className="sidebarTitle"> 
// //                     <link to = "/FindYoung" >청년주택 공고</link>
// //                 </li>
// //                 <li className="sidebarTitle"> 
// //                     <link to = "/FindHappy" >행복주택 공고</link>
// //                 </li>
// //                 <li className="sidebarTitle"> 
// //                     <link to = "/FindRent" >임대주택 공고</link>
// //                 </li>
// //             </ul>
// //         </div>
// //     )
// // }
// export default function Sidebar() {
//      return (
//          <div className="sidebar">
//               <div className="sidebarTop">
                
// //             </div>
// //                 <br>
// //                 </br>
// //                 <br>
// //                 </br>
// //                 <br>
// //                 </br>
// //                 <br>
// //                 </br>
// //                 <br>
// //                 </br>
// //                 <br>
// //                 </br>
                
//                 {/* <li>
//                     <link to="/FindAll" className="sidebarTitle">모집공고 모두 보기</link>
//                 </li>
//                 <li>
//                     <link to="/FindYoung" className="sidebarTitle">청년주택 공고</link>
//                 </li>
//                 <li>
//                     <link to="/FindHappy" className="sidebarTitle">행복주택 공고</link>
//                 </li>
//                 <li>
//                     <link to="/FindRent" className="sidebarTitle">임대주택 공고</link>
//                 </li> */}

//                 <li className="sidebarTitle">모집공고 전체 보기</li>
//                 <br>
//                 </br>
//                 <br>
//                 </br>
//                 <br>
//                 </br>
//                 <li className="sidebarTitle">청년주택 공고</li>
//                 <br></br>
//                 <br></br>
//                 <br></br>

//                 <li className="sidebarTitle">행복주택 공고</li>
//                 <br>
//                 </br>
//                 <br>
//                 </br>
//                 <br>
//                 </br>
//                 <li className="sidebarTitle">임대주택 공고</li>
        
//     </div>
//      );
//  };

// export default Sidebar;



// // function Sidebar() {
// //     const menus = [
// //         {
// //             name : "모집공고 전체 보기", path: "/"
// //         },
// //         {
// //             name : "청년주택 공고" , path : "/young"
// //         },
// //         {
// //             name : "행복주택 공고" , path: "/happy"
// //         },
// //         {
// //             name : "임대주택 공고" , path : "/lent"
// //         }
        
// //     ];

// // //     return(
// // //         <div className="sidebar">
// // //             {menus.map((menu,index) => 
// // //             {
// // //                 return (
// // //                     <link to = {menu.path} key = {index}>
// // //                         <SidebarItem menu = {menu} />
// // //                     </link>
// // //                 );
// // //             })}
// // //         </div>
// // //     )