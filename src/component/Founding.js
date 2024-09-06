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
    const [agreePrivacy, setAgreePrivacy] = useState(false); 
    const [successMessage, setSuccessMessage] = useState(''); 

    // 폼 제출 처리 함수
    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지

        // 필수 항목 체크
        if (!storePresence || !city || !district || !name || !contact) {
            console.error("모든 필드를 입력해주세요.");
            alert("모든 필드를 입력해주세요.");
            return;
        }

        // 개인정보 처리방침 동의 체크
        if (!agreePrivacy) {
            alert("개인정보 처리방침에 동의해야 합니다.");
            return;
        }
    
        const { data, error } = await supabase
            .from('founding') // 테이블 이름
            .insert([
                {
                    store_presence: storePresence,
                    city: city,
                    district: district,
                    name: name,
                    contact: contact,
                    inquiry_text: inquiryText,
                },
            ]);

        // 에러가 발생한 경우
        if (error) {
            console.error('Error inserting data:', error.message); // 오류 메시지 출력
            alert('데이터 삽입 중 오류가 발생했습니다.'); // 사용자에게 오류 알림
            return; // 함수 종료
        } 

        // 성공적으로 데이터 삽입이 완료된 경우
        setSuccessMessage("접수가 완료되었습니다."); // 성공 메시지 설정
        // 폼 초기화
        setStorePresence('');
        setCity('');
        setDistrict('');
        setName('');
        setContact('');
        setInquiryText('');
        setAgreePrivacy(false); // 체크박스 초기화
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
                                    id="storePresenceYes" // ID 추가
                                    value="있음"
                                    checked={storePresence === '있음'}
                                    onChange={() => setStorePresence('있음')}
                                />
                                <label htmlFor="storePresenceYes">있음</label> {/* for 속성 사용 */}

                                <input
                                    type="radio"
                                    id="storePresenceNo" // ID 추가
                                    value="없음"
                                    checked={storePresence === '없음'}
                                    onChange={() => setStorePresence('없음')}
                                />
                                <label htmlFor="storePresenceNo">없음</label> {/* for 속성 사용 */}
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
                                    <input 
                                    type="checkbox" 
                                    id='agreePrivacy'
                                    checked={agreePrivacy} // 체크박스 상태
                                    onChange={(e) => setAgreePrivacy(e.target.checked)} // 체크박스 상태 업데이트
                                />
                                    <label htmlFor="agreePrivacy">개인정보처리방침 동의</label>
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
