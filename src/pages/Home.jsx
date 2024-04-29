import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";

import ToristSpotCard from "../component/ToristSpotCard";
import PhotoGallery from "../component/PhotoGallery";
import Review from "../component/Review";





const Home = () => {
    const allpost = useLoaderData();
    console.log(allpost);

    return (
        <div>
            <div className="mt-10">
                <Banner></Banner>
            </div>
            <div>
                <h2 className="text-4xl font-extrabold text-center">Tourists Spots</h2>
                <p className="text-center font-semibold">Discover breathtaking tourist spots worldwide. From iconic landmarks to hidden gems, explore diverse cultures and natural wonders. <br />Plan your next adventure and immerse yourself in unforgettable experiences.</p>
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-5 p-3">
                    {
                        allpost.map(postCard => <ToristSpotCard key={postCard.id} allpost={postCard}></ToristSpotCard>)
                    }
                </div>

            </div>
            <PhotoGallery></PhotoGallery>
            <Review></Review>
        </div>
    );
};

export default Home;