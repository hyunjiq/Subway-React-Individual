import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../svg/Subway_logo.svg'
import logohover from '../svg/Subway_logo_hover.svg'
import shop from '../svg/shop.svg'
import data from '../data/db.json'
import { Styleicon } from './style';

function Hd() {

    const [ headerchange, setHeaderchange ] = useState(false);

    const hoverheader = () => {
        setHeaderchange(true);
    };

    const leaveheader = () => {
        setHeaderchange(false);
    };

    const [ menutoggle, setMenutoggle ] = useState(false);

    const handleMenuToggle = () => {
        setMenutoggle(!menutoggle); 
    };
    
    const handleCloseMenu = () => {
        setMenutoggle(false);
    };

    const gnbmenu = data.gnb.filter((item)=> item.prnum === "")

    const submenu = {};

    for(let item of data.gnb){
        if(item.prnum !== ""){
            if(!submenu[item.prnum]){
                submenu[item.prnum]=[];      
            }
            submenu[item.prnum].push(item);
        }
    }

    useEffect(() => {

        const gnbli = document.querySelectorAll(".gnbli")

        gnbli.forEach((v) => {
            v.addEventListener("click", () => {
                if (v.classList.contains('m-bg-white')) return;
                gnbli.forEach((vv) => {
                    vv.classList.remove('m-bg-white');
                    vv.querySelector(".gnbul").classList.add("m-gnbul")
                });
                v.classList.add('m-bg-white');
                v.querySelector(".gnbul").classList.remove("m-gnbul")
            });
        });

    }, []);

    return (
        <header className={headerchange? "headeron" : ""}>
            <div className='headerdiv container-xl d-flex align-items-center'>
                <h1 className=''><a href="/"><img src={headerchange? logohover : logo} alt="서브웨이로고" /></a></h1>
                <button className='m-menu-btn' onClick={handleMenuToggle}>
                    <Styleicon content="\F479"></Styleicon>
                    <span className='visually-hidden'>메뉴버튼</span>
                </button>
                <div className={`m-menu ${menutoggle ? 'd-block' : ''}`}>
                    <div className='m-li m-top-menu'>                        
                        <div className='m-menu-header d-flex align-items-center justify-content-between'>
                            <div className='w-0'></div>
                            <img src={logohover} alt="서브웨이로고" />
                            <div className='w-0 x-btn'>
                                <button onClick={handleMenuToggle}>
                                    <Styleicon content="\F62A"></Styleicon>
                                    <span className='visually-hidden'>닫기버튼</span>
                                </button>
                            </div>                            
                        </div>
                        <div className='m-menu-notice'>
                            <Link className='m-menu-a col-10 d-flex justify-content-between align-items-center' to='/'>                                
                                <span>
                                    <Styleicon content="\F189"></Styleicon>
                                    <span>서브웨이 가격조정안내</span>
                                </span>
                                <Styleicon content="\F285"></Styleicon>
                            </Link>
                        </div>
                    </div> 
                    <ul className="gnb" onMouseEnter={hoverheader} onMouseLeave={leaveheader}> 
                        {                    
                            gnbmenu.map((v, i)=>{
                                return(
                                    <li className={`gnbli ${i === 0 ? "m-bg-white":"" }`} key={`gnb${i}`}>
                                        <Link to={v.href}>{v.gnbnm}</Link>
                                        {
                                            submenu[v.cateno] && submenu[v.cateno].length > 0 && (
                                                <ul className={`gnbul ${i > 0 ? "m-gnbul": ""}`}>
                                                    {
                                                        submenu[v.cateno].map((vv, ii) => (
                                                            <li key={`submenu${ii}`} className='gnbulli'>
                                                                <Link className='' to={vv.gnbnm === '매장 찾기' ? vv.href : "/"}>{vv.gnbnm}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul className='m-li m-bottom-menu'>
                        <li className='m-li-btn m-li-search col-6 py-3'>                            
                            <Link className='d-flex flex-column align-items-center' to="/Findrestaurant" onClick={handleCloseMenu}>
                                <img src={shop} alt="매장찾기" />
                                <span>매장찾기</span>
                            </Link>                            
                        </li>
                        <li className='m-li-btn m-li-login col-6 py-3'>
                            <Link className='d-flex flex-column align-items-center'>
                                <Styleicon content="\F4DA"></Styleicon>
                                <span>로그인</span>
                            </Link>                       
                        </li>
                    </ul>  
                </div>

                <ul className="iconmenu justify-content-end align-items-center">
                    <li className="iconli globeli">
                        <button>
                            <Styleicon content="\F3EE"></Styleicon>
                            <span className='visually-hidden'>글로벌 서브웨이 홈페이지 바로가기</span>
                        </button>
                    </li>
                    <li className="iconli loginli">
                        <button>
                            <Styleicon content="\F4E1"></Styleicon>
                            <span className='visually-hidden'>로그인버튼</span>
                        </button>
                    </li>
                </ul>
            </div>            
        </header>
    )
}

export default Hd