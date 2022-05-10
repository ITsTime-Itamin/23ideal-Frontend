import React, { useEffect } from "react";
import './Home.css';
const Home = () => {


    const new_script = src => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', () => {
                resolve();
            });
            script.addEventListener('error', e => {
                reject(e);
            });
            document.head.appendChild(script);
        });
    };

    useEffect(() => {
        const my_script = new_script("https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=658194b4f2b0f7fea8c9097f1a8b6b49");

        my_script.then(() => {
            console.log('script loaded!!!');
            const kakao = window['kakao'];
            kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const options = {
                    center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321),
                    level: 3
                };
                const map = new kakao.maps.Map(mapContainer, options);
                const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321);
                const marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
            });
        });

        // var container = document.getElementById('map');
        // var options = {
        //     center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
        //     level: 3
        // };
        // var map = new kakao.maps.Map(container, options);

    }, []);

    return (
        <div className="Home">
            <div id="map" className="map"></div>
        </div>
        // <div style={{ textAlign: "center" }}>

        // </div>
    );














    //<div className='map' style={{width:"500px",height:"500px"}}> </div>
    //const options = {
    //  center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    // level :3,
    //};
    // function Home() {

    //   function runMap() {
    //     console.log('Maps JS API loaded');
    //   const map = displayMap();
    //}

    // function loadMapsJSAPI(kakaoMapsAPIKeyt) {
    //     const kakaoMapsAPIKeyt = 'API KEY';
    //     const kakaoMapsAPIURL = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=658194b4f2b0f7fea8c9097f1a8b6b49';
    // }


    // const script = document.createElement('script');
    // script.src = kakaoMapAPIURL;
    // script.defer = true;
    // script.async = true;

    // window.runMap = runMap;
    // document.head.appendChild(script);

    // function displayMap() {
    //     const mapOptions = {
    //         center: { center: new kakao.maps.LatLng(37.56779, 126.97995) },
    //         zoom: 14
    //     };
    // }
    // <div id="map">
    //     const mapDiv = document.getElementById ('map');
    //     const map = new google.maps.Map(mapDiv, mapOptions);
    //     return map;
    // </div>



};
export default Home;



