import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../svg/Subway_logo.svg'
import logohover from '../svg/Subway_logo_hover.svg'
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

    // useEffect(()=>{
    //     const gnb = document.querySelector(".gnb")
    //     const _header = document.querySelector("header")

    //         gnb.addEventListener("mouseover", function(){
    //             _header.classList.add("headeron")            
    //         })
    //         gnb.addEventListener("mouseleave", function(){
    //             _header.classList.remove("headeron")
    //         })
    // }, [])

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

    return (
        <header className={headerchange? "headeron" : ""}>
            <div className='container d-flex justify-content-between align-items-center'>
                <h1 className='w-0'><a href="#"><img src={headerchange? logohover : logo} alt="서브웨이로고" /></a></h1>
                <ul className="gnb" onMouseEnter={hoverheader} onMouseLeave={leaveheader}>
                    {                    
                        gnbmenu.map((v, i)=>{
                            return(
                                <li className='gnbli' key={`gnb${i}`}>
                                    <Link to={v.href}>{v.gnbnm}</Link>
                                    {
                                        submenu[v.cateno] && submenu[v.cateno].length > 0 && (
                                            <ul className="gnbul">
                                                {
                                                    submenu[v.cateno].map((vv, ii) => (
                                                        <li key={`submenu${ii}`} className='gnbulli'>
                                                            <Link className='' to={vv.href}>{vv.gnbnm}</Link>
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
                <ul className="iconmenu d-flex justify-content-end align-items-center w-0">
                    <li className="iconli searchli">
                        <button>
                            <Styleicon content="\F52A"></Styleicon>
                            <span className='visually-hidden'>검색버튼</span>
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