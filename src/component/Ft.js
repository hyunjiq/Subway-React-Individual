import React from 'react'
import { Styleicon } from './style'
import { Link } from 'react-router-dom'

function Ft() {
    return (
        <footer>
            <div className='ftboder'>
                <ul className=''>
                    <li>
                        <Link>이용약관</Link>
                    </li>
                    <li>
                        <Link>개인정보처리방침</Link>
                    </li>
                    <li>
                        <Link>써브카드</Link>
                    </li>
                    <li>
                        <Link>점주관리자</Link>
                    </li>
                </ul>
            </div>
            <div className="conwrap container-lg d-flex">
                <div className="">
                    <div className="textwrap d-flex flex-column">
                        <span>서울시 서초구 강남대로 535 프린스빌딩 15층<span> 대표 : INSOO CHO(인수조)</span></span>
                        <span>전화 : 02-797-5036 <span>사업자등록번호 : 101-84-04143</span></span>
                        <span>SUBWAY® is a Registered Trademark of Subway IP LLC. </span>
                        <span>© 2021 Subway IP LLC. All Rights Reserved.</span>
                    </div>
                </div>
                <div className="iconwrap d-flex align-items-center justify-content-end">
                    <Link>
                        <Styleicon content='\F437'></Styleicon>
                    </Link>
                    <Link>
                        <Styleicon content='\F344'></Styleicon>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Ft
