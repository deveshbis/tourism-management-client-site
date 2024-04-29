import useData from "../Hook/useData";
import CountryCard from "./CountryCard";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";


const CountryInfo = () => {

    const { countryData } = useData();

    const [text] = useTypewriter({
        words: ['ries'],
        loop: {},

    })

    return (
        <div>
            <h2 className="text-4xl font-extrabold text-center">Count
                <span>{text}</span>
                <Cursor cursorColor='green' />
            </h2>
            <Fade duration={3000}>
                <p className="text-center font-semibold">Discover breathtaking tourist spots worldwide. From iconic landmarks to hidden gems, explore diverse cultures and natural wonders. <br />Plan your next adventure and immerse yourself in unforgettable experiences.</p>
            </Fade>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-5 p-3">
                {
                    countryData.map((item) => <CountryCard key={item._id} item={item}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default CountryInfo;