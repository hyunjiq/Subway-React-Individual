import { useState } from 'react';
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
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // 폼 제출 처리 함수
    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지
    
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
            .from('founding') 
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

        if (error) {
            console.error('Error inserting data:', error.message); 
        } else {
            alert("접수가 완료되었습니다."); 
        }
    };

    return (
        <div className="founding">
            <div className={`foundingcon container-lg px-0 d-flex align-items-center ${isVisible ? 'd-none' : ''}`}>
                <div className='col-lg-6 d-flex flex-column align-items-end'>
                    <div className="textwrap col-lg-6">
                        <h3>02-797-5036</h3>
                        <Foodtext>
                            <span>글로벌 No.1 프랜차이즈 써브웨이!</span>
                            <span>체계화된 성공 노하우와 함께 </span>
                            <span>새로운 비즈니스의 시작을 준비하세요.</span>
                        </Foodtext>
                    </div>                    
                </div>
                <div className='formwrap col-lg-6'>
                    <form onSubmit={handleSubmit}>
                        <ul className='d-flex flex-wrap align-items-center'>
                            <li className='radioli col-12 d-flex'>
                                <span className='col-6 col-md-3'>
                                    <input
                                        type="radio"
                                        id="storePresenceYes"
                                        value="있음"
                                        checked={storePresence === '있음'}
                                        onChange={() => setStorePresence('있음')}
                                    />
                                    <label htmlFor="storePresenceYes">점포 있음</label> 
                                </span>
                                <span className='col-6 col-md-3'>
                                    <input
                                        type="radio"
                                        id="storePresenceNo"
                                        value="없음"
                                        checked={storePresence === '없음'}
                                        onChange={() => setStorePresence('없음')}
                                    />
                                    <label htmlFor="storePresenceNo">점포 없음</label> 
                                </span>                                
                            </li>                            
                            <LocationSelect
                                onCityChange={setCity}
                                onDistrictChange={setDistrict}
                            />                            
                            <li className='col-12 col-md-6'>
                                <input
                                    type="text"
                                    value={name}
                                    placeholder="성함"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </li>
                            <li className='col-12 col-md-6'>
                                <input
                                    type="text"
                                    value={contact}
                                    placeholder="연락처"
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </li>
                            <li className='col-12'>
                                <textarea
                                    value={inquiryText}
                                    placeholder="문의내용"
                                    onChange={(e) => setInquiryText(e.target.value)}
                                ></textarea>
                            </li>
                            <li className='checkboxli col-12 col-md-6 '>
                                <span>
                                    <input 
                                    type="checkbox" 
                                    id='agreePrivacy'
                                    checked={agreePrivacy} 
                                    onChange={(e) => setAgreePrivacy(e.target.checked)} 
                                />
                                    <label htmlFor="agreePrivacy">개인정보처리방침 동의</label>
                                </span>
                                <Link>[전문보기]</Link>
                            </li>
                            <li className='col-12 col-md-6'>
                                <button type="submit">문의 접수하기</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <button className='foundingbtn' onClick={toggleVisibility}>
                <span className="btnimg col-1"></span>
                <span className="btntext col-1">
                    <span>창업문의</span>
                    <Styleicon content={`${isVisible ? '\\F282' : '\\F286' }`}></Styleicon>
                </span>
            </button>
        </div>        
    );
}

export default Founding;
