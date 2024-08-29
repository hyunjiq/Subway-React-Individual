import React from 'react'
import { Foodnm, Foodtext, Styleicon } from './style'
import { Link } from 'react-router-dom'

function Supportmenu() {
    return (
        <div className="supportmenu">
            <ul className='menuul d-flex flex-wrap  container-lg'>
                <li className='menuli col-6 col-sm-3 d-flex flex-column align-items-center justify-content-center'>
                    <Link className=''>
                        <Styleicon content='\F4CA'></Styleicon>
                    </Link>
                    <Foodnm>프랜차이즈</Foodnm>
                    <Foodtext>개설절차<span>/</span>투자비용 정보</Foodtext>
                    
                </li>
                <li className='menuli col-6 col-sm-3 d-flex flex-column align-items-center justify-content-center'>
                    <Link className=''>
                        <Styleicon content='\F47F'></Styleicon>
                    </Link>
                    <Foodnm>지사안내</Foodnm>
                    <Foodtext>수도권<span>/</span>지방 지사정보</Foodtext>
                    
                </li>
                <li className='menuli col-6 col-sm-3 d-flex flex-column align-items-center justify-content-center'>
                    <Link className=''>
                        <Styleicon content='\F62B'></Styleicon>
                    </Link>
                    <Foodnm>광고영상</Foodnm>
                    <Foodtext>TV광고<span>/</span>동영상</Foodtext>
                    
                </li>
                <li className='menuli col-6 col-sm-3 d-flex flex-column align-items-center justify-content-center'>
                    <Link className=''>
                        <Styleicon content='\F414'></Styleicon>
                    </Link>
                    <Foodnm>고객문의</Foodnm>
                    <Foodtext>자주하는 질문<span>/</span>1:1문의</Foodtext>                    
                </li>
            </ul>
        </div>
    )
}

export default Supportmenu
