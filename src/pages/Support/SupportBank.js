import React from "react";
import "./SupportBank.css";
import { Link } from "react-router-dom";
import PostList from "../../components/PostList";
import SidebarSupport from "../../components/SidebarSupport";

const SupportBank=()=>{
    return(
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>은행별 대출서비스</h1>
            </div>

            <div className="center"> 
                <img alt="center" src="img/center.png" style={{objectfit:"cover", width: "400px",  position:"relative" , top:"80px"}}/>
            </div>

            <div className="bank"> 
                <a target="하나은행" href="https://www.kebhana.com/cont/mall/mall08/mall0802/mall080201/1462744_115194.jsp">
                    <img alt="hana" src="img/hana.png" style={{objectfit:"cover", width:"300px", position :"absolute" , top : "300px" , left : "400px"}} />
                </a>
               
                <a target="ibk" href="https://mybank.ibk.co.kr/uib/jsp/guest/ntr/ntr70/ntr7015/PNTR701520_m.jsp?APLY_EFNC_MENU_ID=P0105040000&SCRE_ID=PNTR701520_m&MENU_DIV=GNB">
                    <img alt="ibk" src="img/ibk.png" style={{objectfit:"cover", width:"300px", position :"absolute" , top : "450px" , left : "400px"}} />
                </a>
                
                <a target="국민" href="https://obank.kbstar.com/quics?page=C103998#CP">
                    <img alt="kookim" src="img/kookmin.png" style={{objectfit:"cover", width:"300px",position :"absolute" , top : "600px" , left : "400px"}} />
                </a>
               
                <a target="농협" href="https://smartmarket.nonghyup.com/servlet/SFSL0043R.view">
                    <img alt="nongh" src="img/nongh.png" style={{objectfit:"cover", width:"300px",position :"absolute" , top : "600px" , left : "750px"}} />
                </a>

                <a target="sc" href="https://www.standardchartered.co.kr/np/kr/pl/bw/LoanDetail.jsp?id=2407">
                    <img alt="sc" src="img/sc.png" style={{objectfit:"cover", width:"300px",position :"absolute" , top : "300px" , left : "1100px"}} />
                </a>
              
                <a target="신한" href="https://oldm.shinhan.com/pages/financialPrdt/loan/loan_list2.jsp?LOAN_TYPE=20">
                    <img alt="sinhan" src="img/sinhan.png" style={{objectfit:"cover", width:"300px",position :"absolute" , top : "450px" , left : "1100px"}} />
                </a>

                <a target="우리" href="https://spot.wooribank.com/pot/Dream?withyou=POLON0055">
                    <img alt="uoori" src="img/uoori.png" style={{objectfit:"cover", width:"300px",position :"absolute" , top : "600px" , left : "1100px"}} />
                </a>
              
            </div>

            <div className="hana"> 

            </div>
            <div className="ibk"> 

            </div>

            <div className="kookmin"> 

            </div>

            <div className="nongn"> 

            </div>

            <div className="sc"> 

            </div>

            <div className="sinhan"> 

            </div>

            <div className="uoori"> 

            </div>
             
           <SidebarSupport  />
        </div>
    );
};

export default SupportBank;