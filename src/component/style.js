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