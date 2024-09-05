import React, { useState, useEffect } from 'react';

function LocationSelect({ onCityChange, onDistrictChange }) {
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    
    const apiUrl = 'https://api.odcloud.kr/api/15063424/v1/uddi:6d7fd177-cc7d-426d-ba80-9b137edf6066?page=1&perPage=10000';
    const apiKey = 'LemkysFgH/JoZ5vlG98rUNRLhBNOMHXgTXf4gGyWLNgvagptilBIvDelmKhezo/O0HXMzldt4fV/IJD223uKuQ==';

    // 시/도 데이터를 API로부터 가져옴
    useEffect(() => {
        fetch(`${apiUrl}`, {
            headers: {
                Authorization: `Infuser ${apiKey}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const cityData = [...new Set(
                    data.data
                        .filter(item => item.읍면동명 !== null) // "읍면동"이 null이 아닌 항목만 필터링
                        .map(item => item.시도명)
                )];
                setCities(cityData);
            })
            .catch((error) => console.error('Error fetching city data:', error));
    }, []);

    // 시/도 선택 시 해당 구/군 데이터 필터링
    const handleCityChange = (e) => {
        const selected = e.target.value;
        setSelectedCity(selected);
        onCityChange(selected);

        // 선택한 시/도의 구/군 데이터 필터링
        fetch(`${apiUrl}`, {
            headers: {
                Authorization: `Infuser ${apiKey}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const filteredDistricts = data.data
                    .filter(item => item.시도명 === selected && item.읍면동명 !== null) // "읍면동"이 null이 아닌 항목만 필터링
                    .map(item => item.시구군명);
                setDistricts(filteredDistricts);
            })
            .catch((error) => console.error('Error fetching district data:', error));
    };

    return (
        <div>
            <select value={selectedCity} onChange={handleCityChange}>
                <option value="">시/도 선택</option>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <select onChange={(e) => onDistrictChange(e.target.value)}>
                <option value="">구/군 선택</option>
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
