import { useState, useEffect} from 'react';
import { Styleicon } from './style';
import { Link } from 'react-router-dom';

function Founding() {
    return (
        <div className="founding">
            <div className="foundingcon">

            </div>
            <button className='foundingbtn'>
                <span className="btnimg col-1"></span>
                <span className="btntext col-1">
                    <span>창업문의</span>
                    <Styleicon content='\F282 \F286'></Styleicon>
                </span>
            </button>
        </div>        
    )
}

export default Founding
