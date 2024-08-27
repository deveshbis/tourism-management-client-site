import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";
import ToristSpotCard from "../component/ToristSpotCard";
import PhotoGallery from "../component/PhotoGallery";
import Review from "../component/Review";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import CountryInfo from "../component/CountryInfo";






const Home = () => {
    const allpost = useLoaderData();
    
    
    const [text] = useTypewriter({
        words: [' Spots'],
        loop: {},

    })

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-10">
                <h2 className="text-4xl font-extrabold text-center">Tourists
                    <span>{text}</span>
                    <Cursor cursorColor='green' />
                </h2>
                <Fade duration={3000}>
                    <p className="text-center font-semibold">Discover breathtaking tourist spots worldwide. From iconic landmarks to hidden gems, explore diverse cultures and natural wonders. <br />Plan your next adventure and immerse yourself in unforgettable experiences.</p>
                </Fade>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-5">
                    {
                        allpost.map(postCard => <ToristSpotCard key={postCard.id} allpost={postCard}></ToristSpotCard>)
                    }
                </div>

            </div>
            <CountryInfo></CountryInfo>
            <PhotoGallery></PhotoGallery>
            <Review></Review>
        </div>
    );
};

export default Home;