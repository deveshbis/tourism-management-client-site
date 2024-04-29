import { useEffect, useState } from 'react';

const useData = () => {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            const response = await fetch("https://tourism-management-server-site.vercel.app/countryData");
            const data = await response.json();
            setCountryData(data);
        };
        
        fetchData();
    }, []);
    return {countryData}
};

export default useData;