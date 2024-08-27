import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, Navigation } from 'swiper/modules'; 
import { Link } from 'react-router-dom';
import data from '../data/db.json'
import { Contentstitle, Foodnm, Foodtext } from './style';

function Salad() {
    return (
        <div className='sandwich'>            
            <Contentstitle className='d-flex flex-column contentstitle'>
                <span>Fresh</span>
                <span>Salad</span>
            </Contentstitle>
            <Swiper
                loop={true}
                modules={[Navigation]} 
                className="saladswiper"
            >           
                        
            </Swiper> 
        </div>    
    )
}

export default Salad
