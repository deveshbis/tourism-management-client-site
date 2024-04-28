import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ToristSpotCard = ({ allpost }) => {
    const { _id, image, spotsName, cost, visitors, travelTime, seasonality } = allpost;
    return (
        <div>
            <div className="card glass border border-black border-solid">
                <figure><img src={image} alt="car!" className='w-full h-[300px]' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-extrabold text-[24px]">{spotsName}</h2>
                    <hr />
                    <p><span className="text-xl font-bold">Amount:</span> {cost} $</p>
                    <p><span className="text-xl font-bold">Visitors:</span> {visitors} People</p>
                    <p><span className="text-xl font-bold">travelTime:</span> {travelTime} Days</p>
                    <p><span className="text-xl font-bold">seasonality:</span> {seasonality}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDtails/${_id}`}><button className="btn btn-primary hover:bg-black">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ToristSpotCard.propTypes = {
    allpost: PropTypes.shape({
        _id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        spotsName: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        visitors: PropTypes.number.isRequired,
        travelTime: PropTypes.string.isRequired,
        seasonality: PropTypes.string.isRequired
    }).isRequired
};

export default ToristSpotCard;
