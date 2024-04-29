import { useEffect, useState } from 'react';

const useData = () => {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            const response = await fetch("http://localhost:5000/countryData");
            const data = await response.json();
            setCountryData(data);
        };
        
        fetchData();
    }, []);
    return {countryData}
};

export default useData;