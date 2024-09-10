import React, { useState, useEffect } from 'react';
import data from '../data/db.json';

function FindRestaurant() {
  const [mapCenter, setMapCenter] = useState({
    let: 37.5012056,
    lon: 126.8827953
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=f281f3543f5e84d03f2d0bed36be1a3b&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        try {
          const mapContainer = document.querySelector('.findmap');
          if (!mapContainer) {
            console.error('Map container not found.');
            return;
          }

          const mapOption = { 
            center: new window.kakao.maps.LatLng(mapCenter.let, mapCenter.lon), 
            level: 3 
          };
          const map = new window.kakao.maps.Map(mapContainer, mapOption);

          const markerPosition = new window.kakao.maps.LatLng(mapCenter.let, mapCenter.lon); 
          const marker = new window.kakao.maps.Marker({
            position: markerPosition
          });
          marker.setMap(map);

          
          const updateMapCenter = () => {
            const newCenter = new window.kakao.maps.LatLng(mapCenter.let, mapCenter.lon);
            map.setCenter(newCenter);
            marker.setPosition(newCenter);
          };

          updateMapCenter();

        } catch (error) {
          console.error('Error initializing Kakao map:', error);
        }
      });
    };

    script.onerror = () => {
      console.error('Failed to load the Kakao Maps script.');
    };

  }, [mapCenter]);  
  return (
    <div className='findrestaurant'>
      <div className='findbanner position-fixed'>
        <div className="bannerwrap container d-flex align-items-center">
          <div className="textwrap">
            <h3>매장찾기</h3>
            <p>가까운 서브웨이 매장을 만나보세요</p>
          </div>          
        </div>        
      </div> 
      <div className='glass'></div>     
      <div className="findmap position-relative">
        <div className="findstore position-absolute">
          <div className="mapcon">            
            <ul>
              {
                data.submap.map((v, i) => (
                  <li key={`submap${i}`}>
                    <button 
                      className='mapconli d-flex flex-column px-0' 
                      onClick={() => {                        
                        setMapCenter({ let: v.let, lon: v.lon }); 
                      }}
                    > 
                      <span className='storenm'>{v.storenm}</span>
                      <span className='adrs'>{v.adrs}</span>
                      <span className='tel'>{v.tel}</span>
                    </button>                    
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindRestaurant;
