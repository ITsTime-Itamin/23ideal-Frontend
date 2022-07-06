import { RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps';
import React, { useEffect, useState } from "react";


const NaverMapAPI=({count})=> {
  const navermaps=window.naver.maps;
  const [countData,setCountData]=useState([]);

  fetch('http://localhost:3000/api/v1/houses').then(res=>(res.json())).then(response=>{setCountData(response.data);}); //json으로 변환 위해 axios->fetch
  const countjson= JSON.stringify(countData,null,2);

  console.log(countjson);

  var HOME_PATH= window.HOME_PATH||'.';
  
 const icon1= {
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+'169'+'</div>',
    anchor: new navermaps.Point(20, 20)
  } ,
  icon2={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:67px; '+
    'font-size:17px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+/*countData.gangDongGuCount*/'2345'+'</div>',
    anchor: new navermaps.Point(20, 20)
  }/*,
  icon3={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.gangBukGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon4={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.gangSeoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon5={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.gwanAkGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon6={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.gwangJinGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon7={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.guRoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon8={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.geumCheonGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon9={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.noWonGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon10={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.doBongGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon11={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.dongDaeMunCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon12={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.dongJakGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon13={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.maPoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon14={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.seoDaeMunGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon15={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.seoChoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon16={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.seongDongGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon17={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.seongBukGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon18={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.songPaGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon19={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.yangCheonGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon20={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.yeongDeungPoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon21={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.yongSanGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon22={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.eunPyeongGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon23={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.jongNoGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon24={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.jungGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  },
  icon25={
    content: '<div style="cursor:pointer; width:70px; height:70px; line-height:42px; '+
    'font-size:10px; color:white; text-align:center; font-weight:bold; background:url('+ HOME_PATH +'/img/markerIcon.png); '+
    'background-size:contain;">'+countData.jungNangGuCount+'</div>',
    anchor: new navermaps.Point(20, 20)
  } 
*/
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
            defaultZoom={12} > /지도 초기 확대 배율 
          
            <Marker key={1} icon={icon1} position={new navermaps.LatLng(37.4959854, 127.0664091)} onClick={()=>alert('강남구')} />
            <Marker key={2} icon={icon2} position={new navermaps.LatLng(37.5492077, 127.1464824)} onClick={()=>alert('강동구')} />
           
          </NaverMap>
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