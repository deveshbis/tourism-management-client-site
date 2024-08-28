import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Img from '../assets/photoGallery/img5.jpg';

const MyListCardUpdate = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState({});

  useEffect(() => {
    fetch(`https://tourism-management-server-site.vercel.app/updateData/${id}`)
      .then(res => res.json())
      .then(data => {
        setUpdate(data);
      });
  }, [id]);
  
  console.log(update);
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

    const updatedTouristSpots = { image, spotsName, country, location, description, travelTime, cost, seasonality };

    fetch(`https://tourism-management-server-site.vercel.app/updateData/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedTouristSpots)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Update successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        }
      });
  };

  return (
    <div className="font-[sans-serif]">
      <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
        <img src={Img} alt="Banner Image" className="w-full h-full object-cover" />
      </div>

      <div className="-mt-28 mb-6 px-4">
        <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-md">
          <h2 className="text-xl text-gray-800 font-bold">Update Tourist Spots</h2>

          <form onSubmit={handleUpdate} className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-sm block mb-2">Tourists Spot Name</label>
              <input type='text' placeholder='Tourists Spot Name' name="spotsName"
                defaultValue={update.spotsName} required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Country Name</label>
              <input type="text"
                name="country"
                placeholder="Country Name"
                defaultValue={update.country}
                required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Location</label>
              <input type="text"
                name="location"
                placeholder="Enter location"
                defaultValue={update.location}
                required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Cost</label>
              <input type="number"
                name="cost"
                defaultValue={update.cost}
                placeholder="Enter average_cost" required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Seasonality</label>
              <input type="text"
                name="seasonality"
                defaultValue={update.seasonality}
                placeholder="Enter seasonality" required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Travel Time</label>
              <input type="number"
                name="travelTime"
                defaultValue={update.travelTime}
                placeholder="Enter travel_time" required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            <div className="col-span-full">
              <label className="text-gray-800 text-sm block mb-2">Image</label>
              <input type='text' placeholder='Enter image url' defaultValue={update.image} name="image" required
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            <div className="col-span-full">
              <label className="text-gray-800 text-sm block mb-2">Description</label>
              <textarea placeholder='Description' rows="6" type="text" defaultValue={update.description}
                name="description"
                required
                className="w-full rounded-md px-4 border border-gray-300 text-sm pt-3 outline-[#007bff]"></textarea>
            </div>

            <button type='submit'
              className="text-white w-max bg-[#007bff] hover:bg-blue-600 tracking-wide rounded-md text-sm px-6 py-3 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
              </svg>
              Update Tourist Spot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyListCardUpdate;