import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const MyListCardUpdate = () => {
    const userData = useLoaderData();
    const {_id, image, spotsName, cost, seasonality } = userData;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const spotsName = form.spotsName.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;

        const updatedTouristSpots = { image, spotsName,  cost, seasonality }
        console.log(updatedTouristSpots);

        fetch(`http://localhost:5000/userData/${_id}`, {
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
        <div>
           <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Coffee: {name}</h1>
          </div>
          <div className="card shrink-0 w-full bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="flex gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="images URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">spotsName</span>
                  </label>
                  <input
                    type="text"
                    name="spotName"
                    defaultValue={spotsName}
                    placeholder="Sopt Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-10">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">cost</span>
                  </label>
                  <input
                    type="number"
                    name="cost"
                    defaultValue={cost}
                    placeholder="cost"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">seasonality</span>
                  </label>
                  <input
                    type="text"
                    name="seasonality"
                    defaultValue={seasonality}
                    placeholder="season"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Coffee</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default MyListCardUpdate;



















// import { useLoaderData } from "react-router-dom";



// const MyListCardUpdate = () => {
//     const allpost = useLoaderData();
//     console.log(allpost);

    
//     return (
//         <div>
//            Updated
//         </div>
//     );
// };

// export default MyListCardUpdate;