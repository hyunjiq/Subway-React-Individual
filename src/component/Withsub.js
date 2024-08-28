import { useEffect, useState } from 'react';
import data from '../data/db.json'
import { Contentstitle } from './style';


function Withsub() {

    useEffect(()=>{
        const contents = document.querySelectorAll(".content");
        
        for(const content of contents){
            content.addEventListener("mouseover", ()=>{
                if(content.classList.contains("on")) return;
                for(const content2 of contents){
                    content2.classList.remove("on")
                }
                content.classList.add("on");
            })
        }
    },[])

    return (
        <div className='withsub'>
            <Contentstitle className='d-flex justify-content-center'>
                <span>With</span>&nbsp;
                <span>Subway</span>
            </Contentstitle>
            <div className="contentwrap container-lg d-flex justify-content-between p-0">
                {
                    data.withSub.map((v, i)=>(
                        <div key={`content${i}`} className={`content d-flex justify-content-center ${ i === 0 ? "on": ""}`}>
                            <div className='content-margin'>
                                <img src={v.src} alt={v.alt} /> 
                            </div>                                                       
                        </div>
                    ))
                }
            </div>
            <div className="subtextwrap d-flex flex-column align-items-center">
                <span>
                    감동과&nbsp;                    
                    <span>재미</span>                    
                    를
                </span>
                <span>                    
                    <span>써브웨이</span>                    
                    &nbsp;와 함께 하세요
                </span>
            </div>
        </div>
    )
}

export default Withsub
