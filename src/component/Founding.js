import React, { useState } from 'react';
import { Styleicon, Foodtext } from './style';
import { Link } from 'react-router-dom';
import LocationSelect from './LocationSelect'; // 새로 만든 컴포넌트 임포트

function Founding() {
    const [storePresence, setStorePresence] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [inquiryText, setInquiryText] = useState('');

    return (
        <div className="founding">
            <div className="foundingcon container-lg d-flex">
                <div className='phonediv col-6 d-flex flex-column align-items-end'>
                    <div className="textwrap col-6">
                        <h3>02-797-5036</h3>
                        <Foodtext>
                            <span>글로벌 No.1 프랜차이즈 써브웨이!</span>
                            <span>체계화된 성공 노하우와 함께 </span>
                            <span>새로운 비즈니스의 시작을 준비하세요.</span>
                        </Foodtext>
                    </div>                    
                </div>
                <div className='formdiv col-6'>
                    <form>
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    value="있음"
                                    checked={storePresence === '있음'}
                                    onChange={() => setStorePresence('있음')}
                                /> 있음
                                <input
                                    type="radio"
                                    value="없음"
                                    checked={storePresence === '없음'}
                                    onChange={() => setStorePresence('없음')}
                                /> 없음
                            </li>
                            <li>
                                <LocationSelect
                                    onCityChange={setCity}
                                    onDistrictChange={setDistrict}
                                />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </li>
                            <li>
                                <textarea
                                    value={inquiryText}
                                    onChange={(e) => setInquiryText(e.target.value)}
                                ></textarea>
                            </li>
                            <li>
                                <input type="checkbox" name="" id="" />
                            </li>
                            <li>
                                <button type="submit"></button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <button className='foundingbtn'>
                <span className="btnimg col-1"></span>
                <span className="btntext col-1">
                    <span>창업문의</span>
                    <Styleicon content='\F282 \F286'></Styleicon>
                </span>
            </button>
        </div>        
    );
}

export default Founding;
