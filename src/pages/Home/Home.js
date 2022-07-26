import { RenderAfterNavermapsLoaded, NaverMap, Marker, GroundOverlay} from 'react-naver-maps';
import React, { useEffect, useState } from "react";
import './MapSide.css'
import { Link, useNavigate } from 'react-router-dom';
import Categories from './Categories';

const NaverMapAPI=()=> {
  const navermaps=window.naver.maps;
  const [countData,setCountData]=useState([]);
  const [map,setMap]=useState({
    center:{lat:37.554722,lng:126.970833},
    isPanto:false,
    zoom:12,
  })
  
  fetch('/api/v1/houses').then(res=>(res.json())).then(response=>{setCountData(response.data);}); //json으로 변환 위해 axios->fetch

  var HOME_PATH= window.HOME_PATH||'.';
  
 const icon1= {
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.gangNamGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  } ,
  icon2={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.gangDongGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon3={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.gangBukGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon4={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.gangSeoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon5={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.gwanAkGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon6={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.gwangJinGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon7={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.guRoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon8={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.geumCheonGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon9={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.noWonGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon10={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.doBongGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon11={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.dongDaeMunCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon12={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.dongJakGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon13={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.maPoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon14={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.seoDaeMunGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon15={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.seoChoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon16={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.seongDongGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon17={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.seongBukGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon18={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.songPaGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon19={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.yangCheonGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon20={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.yeongDeungPoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon21={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.yongSanGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon22={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.eunPyeongGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon23={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.jongNoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon24={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.jungGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon25={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.jungNangGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  } 

  let width='80%'; 

  const [change,setChange]=useState(false);
  const [guInfo,setGuInfo]=useState([]);

  const guCode=(singleguCode)=>{
   const path='/api/v1/houses/'+singleguCode;
    fetch(path).then(res=>(res.json())).then(response=>{
      console.log(response.data.data);
      setGuInfo(response.data.data);})
  }

  if(change==true){
    width='50%';
  }
  else if(change==false){
    width='1300px';
  }

  const [area,setArea]=useState(null);

      return ( 
        <div> 
          <Categories setState={setMap} />
          <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
              width: width,
              alignItems: 'center',
              height: '600px',
              borderWidth: 'medium',
              borderColor: '#D8D8D8',
              justifyContent: 'auto',
              marginLeft:'auto',
              marginRight: 'auto',
              right:'10%',
              float:'right'
            }}
            center={map.center}
            zoom={map.zoom} >
           {/* defaultCenter={{ lat: lat, lng: lng }} // 지도 초기 위치
            defaultZoom = {zoom}> // 지도 초기 위치 확대 비 율 */}
          <>
            <Marker key={1} icon={icon1} position={new navermaps.LatLng(37.4959854, 127.0664091)} onClick={()=>{setChange(true); setMap({center:{lat:37.4959854,lng:127.0664091},isPanto: true}); guCode("680"); setArea("강남구")}} />
            <Marker key={2} icon={icon2} position={new navermaps.LatLng(37.5492077, 127.1464824)} onClick={()=>{setChange(true); setMap({center:{lat:37.5492077,lng:127.1464824},isPanto: true}); guCode("740"); setArea("강동구")}} />
            <Marker key={3} icon={icon3} position={new navermaps.LatLng(37.6469954, 127.0147158)} onClick={()=>{setChange(true); setMap({center:{lat:37.6469954,lng:127.0147158},isPanto: true}); guCode("305"); setArea("강북구")}} />
            <Marker key={4} icon={icon4} position={new navermaps.LatLng(37.5657617, 126.8226561)} onClick={()=>{setChange(true); setMap({center:{lat:37.5657617,lng: 126.8226561},isPanto: true}); guCode("500"); setArea("강서구")}}/>
            <Marker key={5} icon={icon5} position={new navermaps.LatLng(37.4603732, 126.9536086)} onClick={()=>{setChange(true); setMap({center:{lat:37.4603732,lng:126.9536086},isPanto: true}); guCode("620"); setArea("관악구")}} />
            <Marker key={6} icon={icon6} position={new navermaps.LatLng(37.5574120, 127.0796211)} onClick={()=>{setChange(true); setMap({center:{lat:37.5574120,lng:127.0796211},isPanto: true}); guCode("215"); setArea("광진구")}}/>
            <Marker key={7} icon={icon7} position={new navermaps.LatLng(37.4954856, 126.858121)} onClick={()=>{setChange(true); setMap({center:{lat:37.4954856,lng:126.858121},isPanto: true}); guCode("530"); setArea("구로구")}}/>
            <Marker key={8} icon={icon8} position={new navermaps.LatLng(37.4600969, 126.9001546)} onClick={()=>{setChange(true); setMap({center:{lat:37.4600969,lng:126.9001546},isPanto: true}); guCode("545"); setArea("금천구")}}/>
            <Marker key={9} icon={icon9} position={new navermaps.LatLng(37.6377533, 127.0754623)} onClick={()=>{setChange(true); setMap({center:{lat:37.6377533,lng:127.0754623},isPanto: true}); guCode("350"); setArea("노원구")}} />
            <Marker key={10} icon={icon10} position={new navermaps.LatLng(37.6658609, 127.0317674)} onClick={()=>{setChange(true); setMap({center:{lat:37.6658609,lng:127.0317674},isPanto: true}); guCode("320"); setArea("도봉구")}} />
            <Marker key={11} icon={icon11} position={new navermaps.LatLng(37.5838012, 127.0507003)} onClick={()=>{setChange(true); setMap({center:{lat:37.5838012,lng:127.0507003},isPanto: true}); guCode("230"); setArea("동대문구")}} />
            <Marker key={12} icon={icon12} position={new navermaps.LatLng(37.4965037, 126.9443073)} onClick={()=>{setChange(true); setMap({center:{lat:37.4965037,lng:126.9443073},isPanto: true}); guCode("590"); setArea("동작구")}} />
            <Marker key={13} icon={icon13} position={new navermaps.LatLng(37.5676507, 126.8854549)} onClick={()=>{setChange(true); setMap({center:{lat:37.5676507,lng: 126.8854549},isPanto: true}); guCode("440"); setArea("마포구")}} />
            <Marker key={14} icon={icon14} position={new navermaps.LatLng(37.5820369,126.9356665)} onClick={()=>{setChange(true); setMap({center:{lat:37.5820369,lng:126.9356665},isPanto: true}); guCode("410"); setArea("서대문구")}} />
            <Marker key={15} icon={icon15} position={new navermaps.LatLng(37.4769528, 127.0378103)} onClick={()=>{setChange(true); setMap({center:{lat:37.4769528,lng:127.0378103},isPanto: true}); guCode("650"); setArea("서초구")}} />
            <Marker key={16} icon={icon16} position={new navermaps.LatLng(37.5506753, 127.0409622)} onClick={()=>{setChange(true); setMap({center:{lat:37.5506753,lng:127.0409622},isPanto: true}); guCode("200"); setArea("성동구")}} />
            <Marker key={17} icon={icon17} position={new navermaps.LatLng(37.606991, 127.0232185)} onClick={()=>{setChange(true); setMap({center:{lat:37.606991,lng:127.0232185},isPanto: true}); guCode("290"); setArea("성북구")}} />
            <Marker key={18} icon={icon18} position={new navermaps.LatLng(37.5177941, 127.1127078)} onClick={()=>{setChange(true); setMap({center:{lat:37.5177941,lng:127.1127078},isPanto: true}); guCode("710"); setArea("송파구")}} />
            <Marker key={19} icon={icon19} position={new navermaps.LatLng(37.5270616, 126.8561534)} onClick={()=>{setChange(true); setMap({center:{lat:37.5270616,lng:126.8561534},isPanto: true}); guCode("470"); setArea("양천구")}} />
            <Marker key={20} icon={icon20} position={new navermaps.LatLng(37.520641, 126.9139242)} onClick={()=>{setChange(true); setMap({center:{lat:37.520641,lng:126.9139242},isPanto: true}); guCode("560"); setArea("영등포구")}} />
            <Marker key={21} icon={icon21} position={new navermaps.LatLng(37.5311008, 126.9810742)} onClick={()=>{setChange(true); setMap({center:{lat:37.5311008,lng:126.9810742},isPanto: true}); guCode("170"); setArea("용산구")}} />
            <Marker key={22} icon={icon22} position={new navermaps.LatLng(37.6176125, 126.9227004)} onClick={()=>{setChange(true); setMap({center:{lat:37.6176125,lng:126.9227004},isPanto: true}); guCode("380"); setArea("은평구")}} />
            <Marker key={23} icon={icon23} position={new navermaps.LatLng(37.5990998, 126.9861493)} onClick={()=>{setChange(true); setMap({center:{lat:37.5990998,lng:126.9861493},isPanto: true}); guCode("110"); setArea("종로구")}} />
            <Marker key={24} icon={icon24} position={new navermaps.LatLng(37.5579452, 126.9941904)} onClick={()=>{setChange(true); setMap({center:{lat:37.5579452,lng:126.9941904},isPanto: true}); guCode("140"); setArea("중구")}} />
            <Marker key={25} icon={icon25} position={new navermaps.LatLng(37.598031, 127.092931)} onClick={()=>{setChange(true); setMap({center:{lat:37.598031,lng:127.092931},isPanto: true}); guCode("260"); setArea("중랑구")}} />
          </>
          </NaverMap>
          {change===true ?
          <>
          <div className="container">
            <img src="/img/MapSide.png" alt="Snow" style={{width:'100%', height:'600px'}} />
            <h1 className="title">{area} 공공주택 정보</h1>
            <div className="centered">{guInfo.length !=0 ? guInfo.map((info)=>(<li>[{info.insttNm}] {info.hsmpNm}</li>)):null}</div>
            <Link to="/FindAll" className="link">
              전체공고 보러가기 → → 
            </Link>
            <div className="close">접기</div>
          </div>
          </>
          :null}
        </div>
      )
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
        <NaverMapAPI />
      </RenderAfterNavermapsLoaded>

      <div className="container" />
    </div>
  );
}

export default Home;