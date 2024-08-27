/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
// import { Bounce, Fade, Flip, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ToristSpotCard = ({ allpost }) => {
    const { _id, image, spotsName, cost, description } = allpost;
    return (
        <div>

            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300 p-3">
                <div className="flex items-center gap-2 px-6 py-3">
                    <h3 className="text-xl text-gray-800 font-bold flex-1">{spotsName}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" className="cursor-pointer fill-blue-600 shrink-0"
                        viewBox="0 0 64 64">
                        <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <div className="min-h-[300px]">
                    <img src={image} className="w-full h-[300px] rounded-xl" />
                </div>

                <div className="px-6">
                    <p className="text-sm text-gray-600 leading-relaxed py-6">
                        {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                    </p>

                    <div className="mt-4 flex items-center flex-wrap gap-4">
                        <h3 className="text-xl text-gray-800 font-bold flex-1">${cost}</h3>
                        <Link to={`/viewDtails/${_id}`}><button className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider bg-blue-600 hover:bg-blue-700 outline-none">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div >
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
