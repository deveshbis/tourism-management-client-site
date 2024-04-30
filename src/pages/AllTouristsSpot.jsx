import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllTouristsSpot = () => {
    const loadedData = useLoaderData();
    const [sortOrder, setSortOrder] = useState("asc");

    const sortData = (data, order) => {
        return data.sort((a, b) => {
            if (order === "asc") {
                return a.average_cost - b.average_cost;
            } else {
                return b.average_cost - a.average_cost;
            }
        });
    };


    const handleSortChange = (e) => {
        console.log(e.target.value);
        setSortOrder(e.target.value);
    };


    const sortedData = sortData(loadedData, sortOrder);

    return (
        <div className="mt-20">

            <div className="flex justify-center">
                <label htmlFor="sort">Sort by Average Cost:</label>
                <select id="sort" className="ml-2" onChange={handleSortChange}>
                    <option value="asc">Lowest to Highest</option>
                    <option value="desc">Highest to Lowest</option>
                </select>
            </div>



            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-8 p-2">
                {sortedData.map((card) => (
                    <div key={card._id} className="card glass border border-black border-solid">
                        <figure>
                            <img src={card.image} alt="car!" className="w-full h-[300px]" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-extrabold text-[24px]">{card.spotsName}</h2>
                            <hr />
                            <p>
                                <span className="text-xl font-bold">Country:</span> {card.country}
                            </p>
                            <p>
                                <span className="text-xl font-bold">Amount:</span> {card.cost} $
                            </p>
                            <p>
                                <span className="text-xl font-bold">Visitors:</span> {card.visitors} People
                            </p>
                            <p>
                                <span className="text-xl font-bold">travelTime:</span> {card.travelTime} Days
                            </p>
                            <p>
                                <span className="text-xl font-bold">seasonality:</span> {card.seasonality}
                            </p>
                            <div className="card-actions justify-end">
                                <Link to={`/allTouristSpotViewDetails/${card._id}`}>
                                    <button className="btn btn-primary hover:bg-black">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTouristsSpot;



