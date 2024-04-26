import { Link } from "react-router-dom";


const ToristSpotCard = ({ allpost }) => {

    const { id, title, body } = allpost;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDtails/${id}`}><button className="btn btn-primary">Learn now!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToristSpotCard;