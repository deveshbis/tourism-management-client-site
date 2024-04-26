import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";

import ToristSpotCard from "../component/ToristSpotCard";





const Home = () => {
    const allpost = useLoaderData();
    
    
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-4xl font-extrabold text-center">Tourists Spots</h2>
                <p className="text-center font-semibold">Discover breathtaking tourist spots worldwide. From iconic landmarks to hidden gems, explore diverse cultures and natural wonders. <br />Plan your next adventure and immerse yourself in unforgettable experiences.</p>
                <div className=" grid grid-cols-3 gap-3 mt-5">
                    {
                        allpost.map(postCard => <ToristSpotCard key={postCard.id} allpost={postCard}></ToristSpotCard>  )
                    }
                </div>
               
            </div>
        </div>
    );
};

export default Home;