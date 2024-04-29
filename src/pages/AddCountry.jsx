import Swal from "sweetalert2";


const AddCountry = () => {

    const handleAddCountry = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const country = form.country.value;
        const description = form.description.value;
        
        

        const newAddCountry = { image, country,  description }

        console.log(newAddCountry);

        fetch('http://localhost:5000/countryData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddCountry)
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
                        <h1 className="text-5xl font-bold">Add counrty Spot</h1>
                    </div>
                    <div className="card shrink-0 lg:w-full ">
                        <form onSubmit={handleAddCountry} className="card-body">
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add countryt</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCountry;