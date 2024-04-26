import { Link } from "react-router-dom";


const ToristSpotCard = ({ allpost }) => {

    const { id, image, spotsName, cost, visitors, travelTime, seasonality } = allpost;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={image} alt="car!" className='w-full h-[300px]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{spotsName}</h2>
                    <p>{cost}</p>
                    <p>{visitors}</p>
                    <p>{travelTime}</p>
                    <p>{seasonality}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDtails/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToristSpotCard;