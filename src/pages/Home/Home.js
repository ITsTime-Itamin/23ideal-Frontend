import { RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps';
import React, { useEffect, useState } from "react";

const NaverMapAPI=()=> {
  const navermaps=window.naver.maps;
  const [countData,setCountData]=useState(null);

  fetch('http://localhost:3000/api/v1/houses').then(res=>(res.json())).then(response=>{setCountData(response.data);}); //json으로 변환 위해 axios->fetch
  const countjson= JSON.stringify(countData,null,2);

  const Area=()=>{
    let array=[];
    //array.push(Object.keys(countData));
    //console.log(array);
  }

  useEffect(()=>{
    Area();
  })

  return (

    <div>
      <NaverMap
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '80%',
          height: '600px',
          alignItems: 'center',
          justifyContent: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderWidth: 'medium',
          borderColor: '#D8D8D8'
        }}
    
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
      defaultZoom={13} > //지도 초기 확대 배율 

      <Marker key={1} position={new navermaps.LatLng(37.595462133413115,126.97781747263318)} onClick={()=>alert('종로구')} />
      <Marker key={2} position={new navermaps.LatLng(37.57915059217304,126.93679812249744)} onClick={()=>alert('서대문구')} />
      </NaverMap>

      {countjson}
      
    </div>
  );
}

const Home=()=> {

  /*const [countData,setCountData]=useState(null);

  fetch('http://localhost:3000/api/v1/houses').then(res=>(res.json())).then(response=>{setCountData(response.data);}); //json으로 변환 위해 axios->fetch
  const countjson= JSON.stringify(countData,null,2);*/

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <img classname = "MainBanner" src='img/MainBanner.png'></img>
        
      <RenderAfterNavermapsLoaded
        ncpClientId={'optd2y01e0'} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>} >
        <NaverMapAPI/>
      </RenderAfterNavermapsLoaded>

      <div className="container" />
    </div>
  );

}

export default Home;