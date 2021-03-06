import React from "react";
import "./Banner.css" ; 

const Banner = () =>
 {
    if (window.location.pathname === '/Home') return null;
    return (
          <div className="Banner">
                <br></br>
                <br></br>
                <a target="서울주거포털" href="https://housing.seoul.go.kr/">        
                  <img alt="서울주거포털" src="img/Seoul.png" className="img"/>
                </a>
                <br></br>
                <br></br>
                <a target="서울청년포털" href="https://youth.seoul.go.kr/site/main/home/">    
                  <img alt="서울청년포털" src="img/SeoulYouth.png"  className="img"/>
                </a>
                <br></br>
                <br></br>
                <a target="경기주거포털" href="https://housing.gg.go.kr/">    
                  <img alt="경기주거복지포털" src="img/Gyeonggi.png"  className="img"/>
                </a>
                <br></br>
                <br></br>
                <a target="서울주거상담" href="https://www.seoulhousing.kr/">    
                  <img alt="서울주거상담" src="img/SeoulHouse.png"  className="img"/>
               </a>  
            </div>
    )
 }

 export default Banner;