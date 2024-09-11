import { Link } from 'react-router-dom';
import data from '../data/db.json'
import { Contentstitle, Foodnm, Foodtext, Styleicon } from './style';

function Smilesub() {
    const handleClick = (event) => {
        event.preventDefault();
      };
    return (
        <div className="smilesub">
            <Contentstitle className='d-flex justify-content-center'>
                <span>Smile</span>&nbsp;
                <span>Sub</span>
            </Contentstitle>
            <div className="container smilesubwrap d-flex flex-wrap p-0">
                {
                    data.smileSub.map((v, i)=>(
                        <div key={`smilesubmenu${i}`} className="col-6 col-md-4 smilesubmenu">
                            <Link to={v.href} className='d-flex flex-column align-items-center justify-content-center'  onClick={handleClick}>
                                <img src={v.src} alt={v.smileSubhnm} />
                                <div className="subtextwrap d-flex flex-column align-items-center">
                                    <Foodnm color='#ffffff' className='foodnm'>{v.smileSubhnm}</Foodnm>
                                    <Foodtext color='#ffffff' className='foodtext flex-column align-items-center'>
                                        {
                                            v.text.split("|").map((vv, ii)=>(
                                                <span key={`foodtext${ii}`}>
                                                    {vv}
                                                </span>
                                            ))
                                        }
                                    </Foodtext>
                                    <Styleicon content='\F52A'></Styleicon>
                                </div>
                            </Link>                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Smilesub
