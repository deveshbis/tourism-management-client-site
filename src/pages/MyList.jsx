import { Link, useLoaderData } from "react-router-dom";


const MyList = () => {
    const useLoaded = useLoaderData();

    return (
        <div className="grid grid-cols-3 gap-3 mt-5">
            {
                useLoaded.map(card=> <div key={card._id} className="card w-96 glass ">
                <figure><img src={card.image} alt="car!" className='w-full h-[300px]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{card.spotsName}</h2>
                    <p>{card.cost}</p>
                    <p>{card.visitors}</p>
                    <p>{card.travelTime}</p>
                    <p>{card.seasonality}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDtails/${card.id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default MyList;