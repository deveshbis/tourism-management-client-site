import Swal from 'sweetalert2'
import useAuth from '../Hook/useAuth';
import { Navigate } from 'react-router-dom';


const AddTouristsSpot = () => {

    const { user, loading } = useAuth();

    if (loading) {
        return <div className="flex justify-center items-center mt-48 mb-48">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    const handleAddTouristSpot = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const spotsName = form.spotsName.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const visitors = form.visitors.value;
        const email = user.email;
        const name = user.displayName;

        const newTouristSpots = { image, spotsName, country, location, description, cost, seasonality, travelTime, visitors, email, name }

        console.log(newTouristSpots);

        fetch('https://tourism-management-server-site.vercel.app/userData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristSpots)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div> 
            <div className="hero min-h-screen mt-20">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Tourists Spot</h1>
                    </div>
                    <div className="card shrink-0 lg:w-full ">
                        <form onSubmit={handleAddTouristSpot} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Image</span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Image url"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="lg:flex md:flex md:gap-5 lg:gap-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Tourists Spot Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="spotsName"
                                        placeholder="Enter tourists Spot Name"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Country Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="Country Name"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                            </div>
                            <div className="lg:flex md:flex md:gap-5 lg:gap-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Location</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Enter location"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Short description</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        placeholder="Enter description"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                            </div>
                            <div className="lg:flex md:flex md:gap-5 lg:gap-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Average Cost</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="cost"
                                        placeholder=" Enter average_cost"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Seasonality</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="seasonality"
                                        placeholder=" Enter seasonality"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                            </div>
                            <div className="lg:flex md:flex md:gap-5 lg:gap-10">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Travel Time</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="travelTime"
                                        placeholder=" Enter travel_time"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Total Visitors Per Year </span>
                                    </label>
                                    <input
                                        type="number"
                                        name="visitors"
                                        placeholder=" Enter Visitors"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Tourist Spot</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTouristsSpot;