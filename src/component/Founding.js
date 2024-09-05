import React, { useState } from 'react';
import { Styleicon, Foodtext } from './style';
import { Link } from 'react-router-dom';
import LocationSelect from './LocationSelect'; 
import { supabase } from '../data/supabaseClient'; 


function Founding() {
    const [storePresence, setStorePresence] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [inquiryText, setInquiryText] = useState('');

    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault(); // 페이지 리로드 방지

        // 폼 데이터를 객체로 만듭니다.
        const formData = {
            storePresence,
            city,
            district,
            name,
            contact,
            inquiryText,
        };

        // Supabase에 데이터 삽입
        const { data, error } = await supabase
            .from('inquiries')  // 'inquiries' 테이블 이름
            .insert([formData]);

        if (error) {
            console.error('Error inserting data:', error.message);
            alert('데이터 저장 중 오류가 발생했습니다.');
        } else {
            console.log('Data inserted successfully:', data);
            alert('문의가 성공적으로 접수되었습니다.');
        }
    };

    return (
        <div className="founding">
            <div className="foundingcon container-lg d-flex align-items-center">
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
                    <form onSubmit={handleSubmit}>
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
                                    placeholder="성함"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    value={contact}
                                    placeholder="연락처"
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </li>
                            <li>
                                <textarea
                                    value={inquiryText}
                                    placeholder="문의내용"
                                    onChange={(e) => setInquiryText(e.target.value)}
                                ></textarea>
                            </li>
                            <li>
                                <span>
                                    <input type="checkbox" name="" id="" />
                                    개인정보처리방침 동의
                                </span>
                                <Link>[전문보기]</Link>
                            </li>
                            <li>
                                <button type="submit">문의 접수하기</button>
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
