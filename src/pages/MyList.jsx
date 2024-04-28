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
        <div className="grid grid-cols-3 gap-3 mt-20">
            {
                spotCard.map(card => <div key={card._id} className="card  glass ">
                    <figure><img src={card.image} alt="car!" className='w-full h-[300px]' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{card.spotsName}</h2>
                        <p>$: {card.cost}</p>
                        <p>Season: {card.seasonality}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/myListCardUpdate/${card._id}`}><button className="btn btn-primary">Update</button></Link>

                            <button onClick={() => handleDelete(card._id)} className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyList;