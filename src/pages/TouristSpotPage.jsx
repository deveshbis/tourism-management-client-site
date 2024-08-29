import { Link, useLoaderData, useParams } from 'react-router-dom';

const TouristSpotPage = () => {
    const { countryName } = useParams();
    const spots = useLoaderData(); 

   
    const filteredSpots = spots.filter(spot => spot.country.toLowerCase() === countryName.toLowerCase());

    return (
        <div>
            <h1>Tourist Spots in {countryName}</h1>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-5 p-3">
                {filteredSpots.map((spot) => (<div key={spot._id} className="bg-white rounded overflow-hidden p-3">
                    <img src={spot.image} alt="Blog Post 1" className="w-full h-52 object-cover" />
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">{spot.spotsName}</h3>
                        <p className="text-gray-500 text-sm">{spot.description.length > 100 ? `${spot.description.slice(0, 100)}...` : spot.description}</p>
                        <p className="text-orange-500 text-[13px] font-semibold mt-4">${spot.cost}</p>
                        <Link to={`/allTouristSpotViewDetails/${spot._id}`} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]">View Details</Link>
                    </div>
                </div>
                ))}

            </div>
        </div>
    );
};

export default TouristSpotPage;
