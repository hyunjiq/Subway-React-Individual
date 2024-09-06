import React, { useState, useEffect } from 'react';

function LocationSelect({ onCityChange, onDistrictChange }) {
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    const apiUrl = 'https://api.odcloud.kr/api/15063424/v1/uddi:6d7fd177-cc7d-426d-ba80-9b137edf6066';
    const apiKey = 'LemkysFgH/JoZ5vlG98rUNRLhBNOMHXgTXf4gGyWLNgvagptilBIvDelmKhezo/O0HXMzldt4fV/IJD223uKuQ==';
    const perPage = 10000; // 한 번에 가져올 데이터 수
    const maxPages = Math.ceil(49874 / perPage); // 총 페이지 수 계산

    // 필터링할 시도명 목록
    const allowedCities = [
        "강원도", "경기도", "경상남도", "경상북도", "광주광역시",
        "대구광역시", "대전광역시", "부산광역시", "서울특별시", "세종특별자치시",
        "울산광역시", "인천광역시", "전라남도", "전라북도",
        "제주도", "충청남도", "충청북도"
    ];

    // 전체 데이터를 저장할 상태
    const [allData, setAllData] = useState([]);

    // 시/도 데이터를 API로부터 가져옴
    useEffect(() => {
        const fetchAllData = async () => {
            let fetchedData = [];
            for (let page = 1; page <= maxPages; page++) {
                try {
                    const response = await fetch(`${apiUrl}?page=${page}&perPage=${perPage}`, {
                        headers: {
                            Authorization: `Infuser ${apiKey}`,
                        },
                    });
                    const data = await response.json();

                    // "읍면동"이 null이 아닌 항목 중 허용된 시도명만 추가
                    const filteredData = data.data.filter(item =>
                        item.읍면동명 !== null && allowedCities.includes(item.시도명)
                    );
                    fetchedData = [...fetchedData, ...filteredData]; // 데이터 누적
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
            setAllData(fetchedData); // 누적된 데이터 저장
            const cityData = [...new Set(fetchedData.map(item => item.시도명))];
            setCities(cityData); // 시/도 목록 저장
        };

        fetchAllData();
    }, []);

    // 시/도 선택 시 해당 구/군 데이터 필터링
    const handleCityChange = (e) => {
        const selected = e.target.value;
        setSelectedCity(selected);
        onCityChange(selected); // 선택한 도시를 부모 컴포넌트에 전달

        // 선택한 시/도의 구/군 데이터 필터링
        const filteredDistricts = allData.filter(item => item.시도명 === selected && item.읍면동명 !== null);

        // 시군구명 배열 만들기
        const districtNames = [...new Set(filteredDistricts.map(item => item.시군구명))];
        setDistricts(districtNames); // 필터링된 구/군 데이터 설정
    };

    return (
        <div>
            <select value={selectedCity} onChange={handleCityChange}>
                <option value="">창업 희망 시/도 선택</option>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <select onChange={(e) => onDistrictChange(e.target.value)}>
                <option value="">창업 희망 구/군 선택</option>
                {districts.map((district) => (
                    <option key={district} value={district}>
                        {district}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LocationSelect;
