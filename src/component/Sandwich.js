import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules'; 
import { Link } from 'react-router-dom';
import data from '../data/db.json'
import { Contentstitle, Foodnm, Foodtext } from './style';

import 'swiper/css';
import 'swiper/css/navigation';

function Sandwich() {
    return (
        <div className='sandwich'>            
            <Contentstitle className='d-flex flex-column contentstitle'>
                <span>Subway</span>
                <span>Sandwich</span>
            </Contentstitle>
            <div className="container-left">
                <Swiper
                    loop={true}
                    modules={[Navigation, Scrollbar]} 
                    className="sandwichswiper"
                    navigation={{
                        nextEl: ".sandwrapnavi .swiper-button-next",
                        prevEl: ".sandwrapnavi .swiper-button-prev",
                    }}
                    slidesPerView={'auto'}
                    initialSlide={0}
                    scrollbar={{
                        el: '.swiper-scrollbar',
                    }}
                >
                    {
                        data.sandwich.map((v, i)=>(
                            <SwiperSlide key={`sandwichslide${i}`} >
                                <Link to={v.href} className="activewrap d-flex flex-column justify-content-center align-items-center">
                                    <img src={v.src} alt={v.alt} />
                                    <div className="sandtextwrap flex-column align-items-center">
                                        <Foodnm>{v.sandwichnm}</Foodnm>
                                        <span>{v.kcal}</span>
                                        <Foodtext className='d-flex flex-column align-items-center'>
                                        {
                                            v.text.split('|').map((vv, ii)=>(                                                
                                                    <span key={`text${ii}`}>{vv}</span>                                                
                                            ))
                                        }
                                        </Foodtext>
                                    </div>
                                </Link>                                
                            </SwiperSlide>
                        ))
                    }
                    <div className="naviscroll position-relative">
                        <div className="swiper-scrollbar"></div>
                        <div className="sandwrapnavi">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>                    
                </Swiper> 
            </div>
        </div>            
    )
}

export default Sandwich
