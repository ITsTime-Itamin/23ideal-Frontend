import { RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps';
import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Categories from './Categories';


const NaverMapAPI=({count})=> {
  const navermaps=window.naver.maps;
  const [countData,setCountData]=useState([]);
  
  fetch('/api/v1/houses').then(res=>(res.json())).then(response=>{setCountData(response.data);}); //json으로 변환 위해 axios->fetch
//const countjson= JSON.stringify(countData,null,2);

 //console.log(countjson);  console.log(countData);

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
            defaultZoom={12} > // 지도 초기 위치 확대 비율
          
            <Link to="/HomeClick"> <Marker key={1} icon={icon1} position={new navermaps.LatLng(37.4959854, 127.0664091)} onClick={() => alert('강남구')} /></Link>
            <Marker key={2} icon={icon2} position={new navermaps.LatLng(37.5492077, 127.1464824)} onClick={() => <Link to ="HomeClick"></Link>} />
            <Marker key={3} icon={icon3} position={new navermaps.LatLng(37.6469954, 127.0147158)} onClick={()=>alert('강북구')} />
            <Marker key={4} icon={icon4} position={new navermaps.LatLng(37.5657617, 126.8226561)} onClick={()=>alert('강서구')} />
            <Marker key={5} icon={icon5} position={new navermaps.LatLng(37.4603732, 126.9536086)} onClick={()=>alert('관악구')} />
            <Marker key={6} icon={icon6} position={new navermaps.LatLng(37.5574120, 127.0796211)} onClick={()=>alert('광진구')} />
            <Marker key={7} icon={icon7} position={new navermaps.LatLng(37.4954856, 126.858121)} onClick={()=>alert('구로구')} />
            <Marker key={8} icon={icon8} position={new navermaps.LatLng(37.4600969, 126.9001546)} onClick={()=>alert('금천구')} />
            <Marker key={9} icon={icon9} position={new navermaps.LatLng(37.6377533, 127.0754623)} onClick={()=>alert('노원구')} />
            <Marker key={10} icon={icon10} position={new navermaps.LatLng(37.6658609, 127.0317674)} onClick={()=>alert('도봉구')} />
            <Marker key={11} icon={icon11} position={new navermaps.LatLng(37.5838012, 127.0507003)} onClick={()=>alert('동대문구')} />
            <Marker key={12} icon={icon12} position={new navermaps.LatLng(37.4965037, 126.9443073)} onClick={()=>alert('동작구')} />
            <Marker key={13} icon={icon13} position={new navermaps.LatLng(37.5676507, 126.8854549)} onClick={()=>alert('마포구')} />
            <Marker key={14} icon={icon14} position={new navermaps.LatLng(37.5820369,126.9356665)} onClick={()=>alert('서대문구')} />
            <Marker key={15} icon={icon15} position={new navermaps.LatLng(37.4769528, 127.0378103)} onClick={()=>alert('서초구')} />
            <Marker key={16} icon={icon16} position={new navermaps.LatLng(37.5506753, 127.0409622)} onClick={()=>alert('성동구')} />
            <Marker key={17} icon={icon17} position={new navermaps.LatLng(37.606991, 127.0232185)} onClick={()=>alert('성북구')} />
            <Marker key={18} icon={icon18} position={new navermaps.LatLng(37.5177941, 127.1127078)} onClick={()=>alert('송파구')} />
            <Marker key={19} icon={icon19} position={new navermaps.LatLng(37.5270616, 126.8561534)} onClick={()=>alert('양천구')} />
            <Marker key={20} icon={icon20} position={new navermaps.LatLng(37.520641, 126.9139242)} onClick={()=>alert('영등포구')} />
            <Marker key={21} icon={icon21} position={new navermaps.LatLng(37.5311008, 126.9810742)} onClick={()=>alert('용산구')} />
            <Marker key={22} icon={icon22} position={new navermaps.LatLng(37.6176125, 126.9227004)} onClick={()=>alert('은평구')} />
            <Marker key={23} icon={icon23} position={new navermaps.LatLng(37.5990998, 126.9861493)} onClick={()=>alert('종로구')} />
            <Marker key={24} icon={icon24} position={new navermaps.LatLng(37.5579452, 126.9941904)} onClick={()=>alert('중구')} />
            <Marker key={25} icon={icon25} position={new navermaps.LatLng(37.598031, 127.092931)} onClick={()=>alert('중랑구')} />
           
          </NaverMap>

        
        </div>
      )
    }

    /*const Categories_List = () => {
      const Product_Data [
        {id : 'gangNamGu',
        value : '강남구'},
        {id : 'gangDongGu',
        value : '강동구'},
        {id : 'gangBukGu',
        value : '강북구'},
        {id : 'gangSeoGu',
        value : '강서구'},
        {id : 'gwanAkGu',
        value : '관악구'},
        {id : 'gwangJinGu',
        value : '광진구'},
        {id : 'guRoGu',
        value: '구로구'},
    ];
    } */
  

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
      <Categories/>
        
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