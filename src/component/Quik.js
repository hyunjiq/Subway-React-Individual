import { Link } from "react-router-dom"
import { Styleicon } from "./style"


function Quik() {
    return (
        <aside className="position-fixed">
            <Link to="/Findrestaurant#top" className="findbtn">
                <span className="">매장찾기</span>
            </Link>
            <a href="#" className="topbtn">
                <Styleicon content="\F145">                    
                </Styleicon>
                <span className="visually-hidden">위로가기</span>
            </a>
        </aside>
    )
}

export default Quik
