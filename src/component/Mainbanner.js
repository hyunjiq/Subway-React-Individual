import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; 
import { Link } from 'react-router-dom';
import data from '../data/db.json'
import { Mainbannertxt, Mainbannertitle, Mainslidewrap, Mainslidetxtwrap } from '../component/style'


import 'swiper/css';
import 'swiper/css/pagination';

function Mainbanner() {

    return (
        <Swiper 
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination, Autoplay]} 
        className="mainbanner"
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        >
            {
                data.mainbanner.map((v, i)=>(
                    <SwiperSlide className={`mainslide mainslide${i+1}`} key={`mainslide${i}`}>
                        <Link to={v.href}>
                            <Mainslidewrap bgcolor={v.bgcolor} linecolor={v.linecolor} className={`mainslidewrap mainslidewrap${i+1}`}>
                                <Mainslidetxtwrap  url={v.url} className='mainslidetxtwrap d-flex flex-column container-lg'>
                                    <Mainbannertxt color={v.fontcolor} className='mainbannertxt'>{v.text}</Mainbannertxt>
                                    <Mainbannertitle color={v.fontcolor} className='mainbannertitle'>{v.title}</Mainbannertitle>
                                </Mainslidetxtwrap>                                
                            </Mainslidewrap>                            
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper> 

    )
}


export default Mainbanner