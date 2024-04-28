import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});


    useEffect(() => {

        fetch(`http://localhost:5000/singleDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })
    }, [id]);
    
    return (
        <section className='mt-20 px-5'>
            <div className="mb-10">
                <div className='flex justify-between lg:flex-row md:flex-row flex-col items-center mb-8'>
                    <div className="container flex flex-col px-4 space-y-3 mb-5">
                        <h1 className=" mt-2 lg:mt-4 text-xl font-bold lg:text-6xl">{details.spotsName}</h1>
                        <p className='flex gap-3 mt-2 lg:mt-4 text-lg sm:mb-12' data-aos="fade-down" data-aos-duration="3000">
                        </p>
                    </div>
                    <div className='bg-blue-900 text-white p-3 flex justify-between items-center gap-8 rounded-xl' data-aos="fade-left" data-aos-duration="3000">
                        <div>
                            <h5 className="text-3xl">Visitors</h5>
                            <hr />
                            <h5>{details.visitors} PerYear</h5>
                        </div>
                    </div>
                </div>
                <img src={details.image} alt="" className="w-full lg:h-[600px] mx-auto dark:bg-gray-500 rounded-lg shadow-md " data-aos="flip-up" data-aos-duration="3000" />
                <div className="mt-5" data-aos="fade-up-right" data-aos-duration="3000">
                    <button className="btn btn-outline">{details.seasonality}</button>
                </div>
                <div>
                    <h4 className="text-2xl font-bold mt-3 mb-2">Location</h4>
                    <p data-aos="flip-left" data-aos-duration="3000">{details.location}</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold mt-3 mb-2">Description</h4>
                    <p data-aos="zoom-in" data-aos-duration="3000">{details.description}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-5 mt-3" data-aos="flip-right" data-aos-duration="3000">
                    <h1 className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Cost: {details.cost} $</span>
                    </h1>

                    <h1 className="relative inline-block px-4 py-2 font-medium group" data-aos="flip-left" data-aos-duration="3000">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">TravelTime: {details.travelTime} Days</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default ViewDetails;
