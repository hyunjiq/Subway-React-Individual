import { useEffect } from 'react';

function FindRestaurant() {
  useEffect(() => {
   
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=f281f3543f5e84d03f2d0bed36be1a3b&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      
      window.kakao.maps.load(() => {
        const mapContainer = document.querySelector('.findmap');
        const mapOption = { 
          center: new window.kakao.maps.LatLng(37.5012056, 126.8827953), 
          level: 3 
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); 

       
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
      <div className='findbanner position-fixed'>
        <div className="bannerwrap container d-flex align-items-center">
          <div className="textwrap">
            <h3>매장찾기</h3>
            <p>가까운 서브웨이 매장을 만나보세요</p>
          </div>          
        </div>        
      </div> 
      <div className='glass'></div>     
      <div className="findmap"></div>
    </div>
  );
}

export default FindRestaurant;
