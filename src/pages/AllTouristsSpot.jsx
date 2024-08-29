import { Link, useLoaderData } from "react-router-dom";


const AllTouristsSpot = () => {
    const loadedData = useLoaderData();

    return (
        <div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-5 p-3">
                {loadedData.map((card) => (<div key={card._id} className="bg-white rounded overflow-hidden">
                    <img src={card.image} alt="Blog Post 1" className="w-full h-72 object-cover" />
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-3">{card.spotsName}</h3>
                        <p className="text-gray-500 text-sm">{card.description.length > 100 ? `${card.description.slice(0, 100)}...` : card.description}</p>
                        <p className="text-gray-800 text-[13px] font-semibold mt-4">${card.cost}</p>
                        <Link to={`/allTouristSpotViewDetails/${card._id}`} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]">View Details</Link>
                    </div>
                </div>
                ))}

            </div>





        </div>
    );
};

export default AllTouristsSpot;
