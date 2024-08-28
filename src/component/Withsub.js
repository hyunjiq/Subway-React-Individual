import { Link } from 'react-router-dom';
import data from '../data/db.json'
import { Contentstitle, Foodnm, Foodtext, Styleicon } from './style';


function Withsub() {
    return (
        <div className='withsub'>
            <Contentstitle className='d-flex justify-content-center'>
                <span>Width</span>&nbsp;
                <span>Sub</span>
            </Contentstitle>
            <div className="contentwrap container-lg d-flex">
                {
                    data.withSub.map((v, i)=>(
                        <div key={`content${i}`} className='content'>
                            <img src={v.src} alt={v.alt} />                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Withsub
