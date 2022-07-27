import React, { useState } from "react";
import styled from "styled-components";

const Calculator =()=>{

  const [house,setHouse]=useState(0);
  const [family,setFamily]=useState(0);
  const [account,setAccount]=useState(0);
  
  const [year,setYear]=useState(0); //선택한 연도
  const [month,setMonth]=useState(0); //선택한 월
  const [day,setDay]=useState(0); //선택한 일

  const selectyear=['2007 이전','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'];
  const selectmonth=['1','2','3','4','5','6','7','8','9','10','11','12'];
  const selectday=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

  //오늘 날짜 
  let now = new Date();
  let nowYear=now.getFullYear();
  let nowMonth=now.getMonth()+1;
  let nowDay=now.getDate();

  //오늘이 2022-09-20 이라고 하면
  /*if(year=='2007 이전'){ //15년 이상
    setAccount(17);
  }
  if( (nowYear==year && ((day==nowDay)||(day<nowDay)) &&(nowMonth-month<6)) || (nowYear==year && (day>nowDay) &&(nowMonth-month==6)) ){ //6개월 미만
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
  }*/


    return(
      <>
        <h1>
        <Title style={{textAlign:'center', position : "relative" , top : "100px"}}>
        청약가점계산기 </Title>
        </h1>
   
        <div style={{left: '200px', top: '250px' ,position: 'absolute'}}>
        <h3>무주택기간을 선택해주세요 (미혼인 경우 만 30세부터 기간을 산정)</h3>
          <input type="radio" name="house" onChange={()=>setHouse(0)}/>만 30세 미만 미혼자 (0점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(2)}/>1년 미만 (2점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(4)}/>1년 이상 ~ 2년 미만 (4점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(6)}/>2년 이상 ~ 3년 미만 (6점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(8)}/>3년 이상 ~ 4년 미만 (8점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(10)}/>4년 이상 ~ 5년 미만 (10점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(12)}/>5년 이상 ~ 6년 미만 (12점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(14)}/>6년 이상 ~ 7년 미만 (14점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(16)}/>7년 이상 ~ 8년 미만 (16점) <br/>
          <input type="radio" name="house" onChange={()=>setHouse(18)}/>8년 이상 ~ 9년 미만 (18점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(20)}/>9년 이상 ~ 10년 미만 (20점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(22)}/>10년 이상 ~ 11년 미만 (22점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(24)}/>11년 이상 ~ 12년 미만 (24점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(26)}/>12년 이상 ~ 13년 미만 (26점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(28)}/>13년 이상 ~ 14년 미만 (28점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(30)}/>14년 이상 ~ 15년 미만 (30점)<br/>
          <input type="radio" name="house" onChange={()=>setHouse(32)}/>15년 이상 (32점) <br/>
        </div>
        <div style={{left: '200px', top: '700px' ,position: 'absolute'}}>
        <h3>부양가족 수를 선택해주세요</h3>
          <input type="radio" name="family" onChange={()=>setFamily(5)}/> 0명 (5점) <br/>
          <input type="radio" name="family" onChange={()=>setFamily(10)}/> 1명 (10점) <br/>
          <input type="radio" name="family" onChange={()=>setFamily(15)}/> 2명 (15점) <br/>
          <input type="radio" name="family" onChange={()=>setFamily(20)}/> 3명 (20점)  <br/>
          <input type="radio" name="family" onChange={()=>setFamily(25)}/> 4명 (25점)  <br/>
          <input type="radio" name="family" onChange={()=>setFamily(30)}/> 5명 (30점) <br/>
          <input type="radio" name="family" onChange={()=>setFamily(35)}/> 6명 이상 (35점)  <br/>
        </div>
        <div style={{left: '200px', top: '950px' ,position: 'absolute'}}>
        <h3>청약통장</h3>
        가입일 : 
        <select onChange={(e)=>setYear(e.target.value)}>
          {selectyear.map((i)=>{  return ( <option>{i}</option> )  })}
        </select>년  
        <select onChange={(e)=>setMonth(e.target.value)}>
          {selectmonth.map((i)=>{ return ( <option>{i}</option> )})}
        </select>월
        <select onChange={(e)=>setDay(e.target.value)}>
          {selectday.map((i)=>{ return ( <option>{i}</option> )})}
        </select>일
        </div>
        <div style={{left:'200px' , top :'1100px' , position :'absolute'}}>
        
        <button>청약가점 계산하기</button>
        </div>
      </>
    )
}

/*addTolnput = num => {
  console.log({input: setFamily() + setHouse()});
  this.setState({input:setFamily() + setHouse()});
}; //이런식으로 했는데 set 가져오는걸 이렇게 하는게 맞는지 모르겠넵 .... 

calculateResult = () =>
{
  this.setState({input:eval(this.state.input)})
};/*



/*const Increase = () => {
  state = {
    number1 :'',
    number2 : '',
  };*/

  /*result = (e) => {
    this.setState ({
      number: parseInt(this.state.number1) + parseInt(this.state.number2),
    });
  }

  numberChange1 = (e) => {
    this.setState({
      number1 : e.target.value,
    });
  };

  numberChange2 = (e) => {
    this.setState ({
      number2:e.target.value,
    });
  };

  render () 
    const {number1,number2,number} = this.state;
    return (
      <div>
        <div>
          {number1} + {number2} = {number}
        </div>
      </div>
    );
  

  
}

/*function Increase(setFamily, setHouse) {
 return (
 setFamily + setHouse ;
  )
}*/

const Title = styled.body`
  margin: 20px;
  background: #FFC5B4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #000000;
  cursor: pointer;
  position: absolute;
  width: 1041px;
  height: 50px;
  left: 200px;
  top: 150px;
  &:focus {
   color: #808080;
  }
`

export default Calculator;