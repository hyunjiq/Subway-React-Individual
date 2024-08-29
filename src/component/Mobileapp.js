import { Link } from 'react-router-dom';
import { Styleicon } from './style';

function Mobileapp() {
    return (
        <div className="mobileapp">
            <div className="mobileappwrap container-lg px-0 d-flex">
                <div className="col-7 col-md-6 apptext">
                    <div className="apptextwrap d-flex flex-column align-items-center">
                        <span>다양한 서비스와 혜택이 가득</span>
                        <h2><span>서브웨이 앱 에서도</span><span>주문이 가능해요</span></h2>
                        <Link className='appdownload'>
                            <span><Styleicon content='\F30A'></Styleicon>앱 다운로드</span>
                        </Link>
                    </div>                    
                </div>
                <div className="col-4 col-md-6 appimg">

                </div>
            </div>
        </div>
    )
}

export default Mobileapp
