import styled from "styled-components";

//icons
export const Styleicon = styled.i`
    display: inline-block;
    font-family: bootstrap-icons !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: -.125em;
    -webkit-font-smoothing: antialiased;
    &::before{
        content:  "${(props) => (props.content ? props.content : '')}";
       
    }
`
//fonts
export const Mainbannertxt = styled.span`
    position: relative;
    z-index: 10;
    font-family: 'SBAggroL';
    font-size: 3vw;
    color: ${(props) => (props.color ? props.color : "")};
`

export const Mainbannertitle = styled.span`
    position: relative;
    z-index: 10;
    font-family: 'JalnanGothic';
    font-size: 5.5vw;
    color: ${(props) => (props.color ? props.color : "")};
`
export const Contentstitle = styled.h2`
    text-align: center;
    font-size: 3.5vw;
    font-family: 'ArchivoBlack';
    line-height: .9;
    letter-spacing: -0.085rem;
    span:first-child{
        color:#FDC504;
    }
    span:last-child{
        color: #009132;
    }
    @media (max-width: 768px) {
        font-size: 6vw;
    }
    @media (max-width: 575px) {
        font-size: 7vw;
    }
`
export const Foodnm = styled.span`
    font-family: 'Noto Sans KR';
    font-weight: 600;
    font-size: 1.4375rem;
    color: #333;
    @media (max-width: 990px) {
        font-size: 1.35rem;
    }
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`
export const Foodtext = styled.span`
    font-family: 'Noto Sans KR';
    font-weight: 300;
    font-size: 1.125rem;
    color: #666;
    @media (max-width: 990px) {
        font-size: 1rem;
    }
    @media (max-width: 768px) {
        font-size: 0.875rem;
    }
`
//div
export const Mainslidewrap = styled.div`
    width: 95%;
    height: 80vh;
    margin: auto;
    border-radius: 50px 0 50px 50px;
    overflow: hidden;
    position: relative;
    background-color: ${(props) => (props.bgcolor ? props.bgcolor : "")};
    &::before{
        content: "";
        width: 100%;
        height: 9.375rem;
        position: absolute;
        bottom: 0;
        background-color: ${(props) => (props.linecolor ? props.linecolor : "")};
        z-index: 1;
        transition: .3s;
    }
`   
export const Mainslidetxtwrap = styled.div`
    &::before{
        content: "";
        ${(props) => props.url && `background: url(${props.url}) no-repeat;`}
        background-size: contain;
        position: absolute;
        z-index: 2;
        transition:.3s;
    }
`