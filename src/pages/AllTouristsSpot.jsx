
import { Link, useLoaderData } from "react-router-dom";


const AllTouristsSpot = () => {
    const useLoaded = useLoaderData();

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3   mt-20 p-2">
            {
                useLoaded.map(card => <div key={card._id} className="card  glass border border-black border-solid">

                    <figure><img src={card.image} alt="car!" className='w-full h-[300px]' /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold text-[24px]">{card.spotsName}</h2>
                        <hr />
                        <p><span className="text-xl font-bold">Amount:</span> {card.cost} $</p>
                        <p><span className="text-xl font-bold">Visitors:</span> {card.visitors} People</p>
                        <p><span className="text-xl font-bold">travelTime:</span> {card.travelTime} Days</p>
                        <p><span className="text-xl font-bold">seasonality:</span> {card.seasonality}</p>
                        <div className="card-actions justify-end">
                        <Link to={`/allTouristSpotViewDetails/${card._id}`}><button className="btn btn-primary hover:bg-black">View Details</button></Link>
                        </div>
                    </div>


                </div>)
            }
        </div>
    );
};

export default AllTouristsSpot;

