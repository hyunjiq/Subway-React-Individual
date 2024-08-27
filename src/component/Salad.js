import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import { Link } from 'react-router-dom';
import data from '../data/db.json'
import { Contentstitle, Foodnm, Foodtext } from './style';

function Salad() {
    return (
        <div className='salad'>  
            <div className="saladtxtwrap d-flex flex-column align-items-center justify-content-center">
                <Contentstitle color='#ffffff' className='contentstitle d-flex flex-column'>
                    <span>Fresh</span>
                    <span>Salad</span>
                </Contentstitle>
                <div className='foodtext flex-column align-items-center'>
                    <Foodtext color="#ffffff">양은 더 많이! 칼로리는 더 적게!</Foodtext>
                    <Foodtext color="#ffffff">신선한 야채와 다양한 소스로 가볍게 샐러드를 즐겨보세요!</Foodtext>
                </div>                
            </div>            
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation]} 
                    navigation={{
                        prevEl:".swiper-button-prev",
                        nextEl:".swiper-button-next"
                    }}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    className="saladswiper"
                    breakpoints={{
                        768:{
                            slidesPerView:3,
                            slidesPerGroup:3
                        },
                        576:{
                            slidesPerView:2,
                            slidesPerGroup:2
                        },
                        0:{
                            slidesPerView:1,
                            slidesPerGroup:1
                        }
                    }}
                >           
                    {
                    data.salad.map((v, i)=>(
                        <SwiperSlide key={`salad${i}`}>
                            <Link to={v.href} className='d-flex flex-column justify-content-center align-items-center'>
                                <img src={v.src} alt={v.alt}/>
                                <span className="saladtextwrap d-flex flex-column align-items-center">
                                    <Foodnm>{v.saladhnm}</Foodnm>
                                    <Foodtext>{v.text}</Foodtext>
                                </span>
                            </Link>                        
                        </SwiperSlide>
                    ))
                } 
                <div className="saladnavi">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>  
                </Swiper> 
            </div>
        </div>    
    )
}

export default Salad
