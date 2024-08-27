import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryCard = ({ item }) => {
    const { image, country, description } = item;
    return (
        <Link to={`/touristSpot/${country}`} className="cursor-pointer">
            <div className="bg-white font-[sans-serif]">
                <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                    <img src={image} alt="Blog Post 1" className="w-full h-96 object-cover" />
                    <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
                        <h3 className="text-xl font-bold text-[#333]">{country}</h3>
                        <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                            <p className="text-gray-600 text-sm">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

CountryCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired
};

export default CountryCard;
