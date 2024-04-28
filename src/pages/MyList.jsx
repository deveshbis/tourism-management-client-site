import { useState } from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import useAuth from "../Hook/useAuth";


const MyList = () => {
    const useLoaded = useLoaderData();
    const [spotCard, setSpotCard] = useState(useLoaded);

    const { user, loading } = useAuth();

    if (loading) {
        return <div className="flex justify-center items-center mt-48 mb-48">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"

        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteData/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingCard = spotCard.filter(card => card._id !== _id)
                            setSpotCard(remainingCard)
                        }
                    })

            }
        });
    }

    return (
        <div className="mt-20">

            <table className=" w-full border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2 text-3xl text-center font-extrabold">Image</th>
                        <th className="border border-gray-400 px-4 py-2 text-3xl text-center font-extrabold">Spot Name</th>
                        <th className="border border-gray-400 px-4 py-2 text-3xl text-center font-extrabold">Cost</th>
                        <th className="border border-gray-400 px-4 py-2 text-3xl text-center font-extrabold">Seasonality</th>
                        <th className="border border-gray-400 px-4 py-2 text-3xl text-center font-extrabold ">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {spotCard.map((card) => (
                        <tr key={card._id}>
                            <td className="border border-gray-400 px-4 py-2">
                                <img src={card.image} alt="Spot" className="w-full h-24" />
                            </td>
                            <td className="border border-gray-400 px-4 py-2 text-[24px] text-center font-bold">{card.spotsName}</td>
                            <td className="border border-gray-400 px-4 py-2 text-[24px] text-center font-bold">${card.cost}</td>
                            <td className="border border-gray-400 px-4 py-2 text-[24px] text-center font-bold">{card.seasonality}</td>
                            <td className="border border-gray-400 px-4 py-2 text-xl text-center font-bold">
                                <Link to={`/myListCardUpdate/${card._id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Update</button></Link>
                                <button onClick={() => handleDelete(card._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyList;
