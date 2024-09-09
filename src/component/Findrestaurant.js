import { useEffect } from 'react';

function FindRestaurant() {
  useEffect(() => {
    // Kakao Maps API 스크립트를 동적으로 로드
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=f281f3543f5e84d03f2d0bed36be1a3b&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // API가 로드되면 지도를 생성
      window.kakao.maps.load(() => {
        const mapContainer = document.querySelector('.findmap'); // 지도를 표시할 div
        const mapOption = { 
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 지도의 중심좌표 (서울)
          level: 3 // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성

        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780); 
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <div className='findrestaurant'>
      <div className='findbanner'>
      
      </div>
      {/* 지도 표시할 영역 */}
      <div className="findmap"></div>
    </div>
  );
}

export default FindRestaurant;
