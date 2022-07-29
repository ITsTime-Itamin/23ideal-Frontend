import React, { useState } from "react";
import styled from "styled-components";

const Calculator =()=>{

  const [house,setHouse]=useState(0);
  const [family,setFamily]=useState(0);
  const [account,setAccount]=useState(0);
  let total=house+family+account;
  
 /* const [year,setYear]=useState(""); //선택한 연도
  const [month,setMonth]=useState(""); //선택한 월
  const [day,setDay]=useState(""); //선택한 일

  const selectyear=['선택','2007 이전','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'];
  const selectmonth=['선택','1','2','3','4','5','6','7','8','9','10','11','12'];
  const selectday=['선택','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

  //오늘 날짜 
  let now = new Date();
  let nowYear=now.getFullYear();
  let nowMonth=now.getMonth()+1;
  let nowDay=now.getDate();*/

  //오늘이 2022-09-20 이라고 하면
  /*if(year=='2007 이전'){ //15년 이상
    setAccount(17);
  }
 else if( (nowYear==year && ((day==nowDay)||(day<nowDay)) &&(nowMonth-month<6)) || (nowYear==year && (day>nowDay) &&(nowMonth-month==6)) ){ //6개월 미만
    setAccount(1);
  }
  else if( nowYear==year && ((day==nowDay)||(day<nowDay)) && ((nowMonth-month==6) || (nowMonth-month>6)) ){ //2022.01.20
    setAccount(2);
  }
  else if ( nowYear-year==1 && nowMonth>6 && month>nowMonth ){
    setAccount(2);
  }
  else if( nowYear!=year && nowYear-year==1 &&((day==nowDay)||(day<nowDay)) && ((nowMonth-month==6) || (nowMonth-month>6)) ){
    setAccount(2);
  }
  /*else if (nowYear != year && nowYear==1)*/


    return(
      <>
        <h1>
        <Title style={{textAlign:'center', position : "relative" , top : "60px"}}>
        청약가점계산기 </Title>
        </h1>

        <h3 style={{textAlign:'left',position:'absolute',left:'15%',top:'250px'}}><img src="./img/house.png" style={{width:'25px',height:'29px'}}/>&nbsp;무주택기간을 선택해주세요 (미혼인 경우 만 30세부터 기간을 산정)</h3>
        <div style={{border:'1px solid #D7D6D6',width:'1030px',height:'210px',position:'absolute',left:'15%',top:'320px'}}>
        <div style={{left: '22px', top: '16px' ,position: 'absolute',  lineHeight:'29px',margin:'0px'}}>
          <input type="radio" name="house" onChange={()=>setHouse(0)}/> &nbsp; 만 30세 미만 미혼자(0점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(2)}/> &nbsp;1년 미만 (2점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(4)}/> &nbsp;1년 이상 ~ 2년 미만 (4점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(6)}/> &nbsp;2년 이상 ~ 3년 미만 (6점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(8)}/> &nbsp;3년 이상 ~ 4년 미만 (8점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(10)}/> &nbsp;4년 이상 ~ 5년 미만 (10점)<br/>
          </div>
          <div style={{left: '385px', top: '16px' ,position: 'absolute',  lineHeight:'29px'}}>
          <input type="radio" name="house" onChange={()=>setHouse(12)}/> &nbsp;5년 이상 ~ 6년 미만 (12점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(14)}/> &nbsp;6년 이상 ~ 7년 미만 (14점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(16)}/> &nbsp;7년 이상 ~ 8년 미만 (16점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(18)}/> &nbsp;8년 이상 ~ 9년 미만 (18점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(20)}/> &nbsp;9년 이상 ~ 10년 미만 (20점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(22)}/> &nbsp;10년 이상 ~ 11년 미만 (22점)<br/>
          </div>
          <div style={{left: '750px', top: '16px' ,position: 'absolute',  lineHeight:'29px'}}>
          <input type="radio" name="house" onChange={()=>setHouse(24)}/> &nbsp;11년 이상 ~ 12년 미만 (24점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(26)}/> &nbsp;12년 이상 ~ 13년 미만 (26점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(28)}/> &nbsp;13년 이상 ~ 14년 미만 (28점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(30)}/> &nbsp;14년 이상 ~ 15년 미만 (30점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(32)}/> &nbsp;15년 이상 (32점) <br/>
        </div>
        </div>
        
      
        <h3  style={{textAlign:'left',position:'absolute',left:'15%',top:'565px'}}><img src="./img/house.png" style={{width:'25px',height:'29px'}}/> &nbsp; 부양가족 수를 선택해주세요</h3>
        <div style={{border:'1px solid #D7D6D6',width:'1030px',height:'65px',position:'absolute',left:'15%',top:'635px'}}>
        <div style={{left: '22px', top: '20px' ,position: 'absolute',lineHeight:'25px'}}>
          <input type="radio" name="family" onChange={()=>setFamily(5)}/> 0명 (5점) 
        </div>
        <div style={{left: '162px', top: '20px' ,position: 'absolute',lineHeight:'25px'}}>
          <input type="radio" name="family" onChange={()=>setFamily(10)}/> 1명 (10점) 
        </div>
        <div style={{left: '292px', top: '20px' ,position: 'absolute',lineHeight:'25px'}}>
          <input type="radio" name="family" onChange={()=>setFamily(15)}/> 2명 (15점) 
        </div>
        <div style={{left: '422px', top: '20px' ,position: 'absolute',lineHeight:'25px'}}>
          <input type="radio" name="family" onChange={()=>setFamily(20)}/> 3명 (20점)  
        </div>
        <div style={{left: '552px', top: '20px' ,position: 'absolute',lineHeight:'25px'}}>
          <input type="radio" name="family" onChange={()=>setFamily(25)}/> 4명 (25점)  </div>
        <div style={{left: '682px', top: '20px' ,position: 'absolute',lineHeight:'25px'}}>
          <input type="radio" name="family" onChange={()=>setFamily(30)}/> 5명 (30점)  </div>
        <div style={{left: '812px', top: '20px' ,position: 'absolute',lineHeight:'25px'}}>
          <input type="radio" name="family" onChange={()=>setFamily(35)}/> 6명 이상 (35점)  </div>
      </div>

        <h3 style={{textAlign:'left',position:'absolute',left:'15%',top:'740px'}}><img src="./img/house.png" style={{width:'25px',height:'25px'}}/>&nbsp;청약통장 가입기간을 선택해주세요</h3>
        <div style={{border:'1px solid #D7D6D6',width:'1030px',height:'210px',position:'absolute',left:'15%',top:'810px'}}>
        <div style={{left: '22px', top: '16px' ,position: 'absolute',  lineHeight:'29px',margin:'0px'}}>
          <input type="radio" name="account" onChange={()=>setAccount(1)}/> 만 6개월 미만 (1점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(2)}/> 만 6개월 이상 ~ 1년 미만 (2점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(3)}/> 만 1년 이상 ~ 2년 미만 (3점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(4)}/> 만 2년 이상 ~ 3년 미만 (4점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(5)}/> 만 3년 이상 ~ 4년 미만 (5점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(6)}/> 만 4년 이상 ~ 5년 미만 (6점) <br/>
        </div>
        <div style={{left: '385px', top: '16px' ,position: 'absolute',  lineHeight:'29px'}}>
          <input type="radio" name="account" onChange={()=>setAccount(7)}/> 만 5년 이상 ~ 6년 미만 (7점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(8)}/> 만 6년 이상 ~ 7년 미만 (8점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(9)}/> 만 7년 이상 ~ 8년 미만 (9점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(10)}/> 만 8년 이상 ~ 9년 미만 (10점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(11)}/> 만 9년 이상 ~ 10년 미만 (11점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(12)}/> 만 10년 이상 ~ 11년 미만 (12점) <br/>
        </div>
        <div style={{left: '745px', top: '16px' ,position: 'absolute',  lineHeight:'29px'}}>
          <input type="radio" name="account" onChange={()=>setAccount(13)}/> 만 11년 이상 ~ 12년 미만 (13점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(14)}/> 만 12년 이상 ~ 13년 미만 (14점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(15)}/> 만 13년 이상 ~ 14년 미만 (15점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(16)}/> 만 14년 이상 ~ 15년 미만 (16점) <br/>
          <input type="radio" name="account" onChange={()=>setAccount(17)}/> 만 15년 이상 (17점) <br/>
        </div>
         </div>
        <div>
        <Total>총점  : &nbsp; {total}</Total> 
        </div>

        <div style={{padding:'10px'}}>
        &nbsp;
        </div>
  
      </>
    )
}

const Title = styled.body`
  margin: 20px;
  padding:4px;
  background: #FB9374;
  color: white;
  cursor: pointer;
  position: absolute;
  width: 1041px;
  height: 50px;
  left: 200px;
  top: 150px;
  &:focus {
   color: #808080;
  }
  font-size:30px;
  border-bottom:5px solid #FFC5B4;
  border-top:5px solid #FFC5B4;
`

const Total = styled.body`
  margin: 20px;
  padding:4px;
  background: #FB9374;
  color: white;
  cursor: pointer;
  position: absolute;
  width: 1041px;
  height: 50px;
  left: 200px;
  top: 1050px;
  text-align:center;
  &:focus {
   color: #808080;
  }
  font-size:30px;
  border-bottom:5px solid #FFC5B4;
  border-top:5px solid #FFC5B4;
  margin-bottom:10px;
  font-weight:bold
`

export default Calculator;