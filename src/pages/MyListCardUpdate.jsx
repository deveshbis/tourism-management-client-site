
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const MyListCardUpdate = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState({});


  useEffect(() => {

    fetch(`http://localhost:5000/updateData/${id}`)
      .then(res => res.json())
      .then(data => {
        setUpdate(data)
      })
  }, [id]);


  const handleUpdate = (event) => {
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

    const updatedTouristSpots = { image, spotsName, country, location, description, travelTime, visitors, cost, seasonality }

    fetch(`https://tourism-management-server-site.vercel.app/updateData/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedTouristSpots)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'update successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }

  return (
    <div className="mt-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Tourists Spot</h1>
          </div>
          <div className="card shrink-0 w-full bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image url"
                  defaultValue={update.image}
                  className="input input-bordered"

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
                    defaultValue={update.spotsName}
                    className="input input-bordered"

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
                    defaultValue={update.country}
                    className="input input-bordered"

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
                    defaultValue={update.location}
                    className="input input-bordered"

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
                    defaultValue={update.description}
                    className="input input-bordered"

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
                    defaultValue={update.cost}
                    className="input input-bordered"

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
                    defaultValue={update.seasonality}
                    className="input input-bordered"

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
                    defaultValue={update.travelTime}
                    className="input input-bordered"

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
                    defaultValue={update.visitors}
                    className="input input-bordered"

                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListCardUpdate;