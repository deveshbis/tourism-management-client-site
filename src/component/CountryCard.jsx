import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryCard = ({ item }) => {
    const { image, country, description } = item;
    return (
        <Link to={`/touristSpot/${country}`} className="cursor-pointer">
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{country}</h2>
                    <p className="text-sm dark:text-gray-600">{description}</p>
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
