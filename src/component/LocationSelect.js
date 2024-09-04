import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationSelect = () => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [loadingCities, setLoadingCities] = useState(true);
  const [loadingDistricts, setLoadingDistricts] = useState(false);
  const [error, setError] = useState(null);

  const serviceKey = process.env.REACT_APP_SERVICE_KEY;

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('https://infuser.odcloud.kr/api/15063424/v1/administrative-divisions', {
          params: { serviceKey }
        });
        setCities(response.data.data);
        setLoadingCities(false);
      } catch (err) {
        setError(err);
        setLoadingCities(false);
      }
    };

    fetchCities();
  }, [serviceKey]);

  useEffect(() => {
    if (selectedCity) {
      const fetchDistricts = async () => {
        setLoadingDistricts(true);
        try {
          const response = await axios.get(`https://infuser.odcloud.kr/api/15063424/v1/administrative-divisions/${selectedCity}`, {
            params: { serviceKey }
          });
          setDistricts(response.data.data);
          setLoadingDistricts(false);
        } catch (err) {
          setError(err);
          setLoadingDistricts(false);
        }
      };

      fetchDistricts();
    } else {
      setDistricts([]);
    }
  }, [selectedCity, serviceKey]);

  if (loadingCities) return <div>Loading cities...</div>;
  if (loadingDistricts) return <div>Loading districts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
        <option value="">시/도 선택</option>
        {cities.map(city => (
          <option key={city.adm_code} value={city.adm_code}>
            {city.adm_nm}
          </option>
        ))}
      </select>

      <select 
        value={selectedDistrict} 
        onChange={e => setSelectedDistrict(e.target.value)} 
        disabled={!selectedCity}
      >
        <option value="">구/군 선택</option>
        {districts.map(district => (
          <option key={district.adm_code} value={district.adm_code}>
            {district.adm_nm}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelect;
