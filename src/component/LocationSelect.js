import React, { useState, useEffect } from 'react';

const API_KEY = 'LemkysFgH%2FJoZ5vlG98rUNRLhBNOMHXgTXf4gGyWLNgvagptilBIvDelmKhezo%2FO0HXMzldt4fV%2FIJD223uKuQ%3D%3D';
const BASE_URL = 'http://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList';

const LocationSelect = () => {
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    // 시/도 목록 가져오기
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch(`${BASE_URL}?serviceKey=${API_KEY}&type=json&adm_sect_cd=00`);
                const data = await response.json();
                if (data.response && data.response.body && data.response.body.items) {
                    setCities(data.response.body.items.filter(item => item.adm_sect_cd === '00'));
                } else {
                    console.error('Invalid data structure for cities');
                }
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
        fetchCities();
    }, []);

    // 구/군 목록 가져오기
    useEffect(() => {
        if (selectedCity) {
            const fetchDistricts = async () => {
                try {
                    const response = await fetch(`${BASE_URL}?serviceKey=${API_KEY}&type=json&adm_sect_cd=${selectedCity}`);
                    const data = await response.json();
                    if (data.response && data.response.body && data.response.body.items) {
                        setDistricts(data.response.body.items);
                    } else {
                        console.error('Invalid data structure for districts');
                        setDistricts([]);
                    }
                } catch (error) {
                    console.error('Error fetching districts:', error);
                    setDistricts([]);
                }
            };
            fetchDistricts();
        } else {
            setDistricts([]);
        }
    }, [selectedCity]);

    return (
        <div>
            <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
                <option value="">시/도 선택</option>
                {cities.map(city => (
                    <option key={city.sido_cd} value={city.sido_cd}>
                        {city.sido_nm}
                    </option>
                ))}
            </select>

            <select value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} disabled={!selectedCity}>
                <option value="">구/군 선택</option>
                {districts.map(district => (
                    <option key={district.region_cd} value={district.region_cd}>
                        {district.region_nm}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LocationSelect;
