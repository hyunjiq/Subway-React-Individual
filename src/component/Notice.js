import data from '../data/db.json'
import { Link } from 'react-router-dom';

function Notice() {
    const handleClick = (event) => {
        event.preventDefault();
      };
    return (
        <div className="notice">
            <div className="container-lg px-0">
                <div className="col-md-8 col-lg-6 noticewrap">
                    <h2 className="noticetitle">
                        <span>Subway's</span>&nbsp;
                        <span>News</span>
                    </h2>
                    <ul>
                        {
                            data.subnews.map((v, i)=>(
                                <li key={`noticelist${i}`}>
                                    <Link to={v.href}  className='d-flex justify-content-between'  onClick={handleClick}>
                                        <span className='title'>{v.title}</span>
                                        <span className='day'>{v.day}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>                
            </div>
        </div>
    )
}

export default Notice
