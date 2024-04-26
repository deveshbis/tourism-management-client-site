import { useForm } from "react-hook-form";
import useAuth from "../Hook/useAuth";
import { ToastContainer} from "react-toastify";
import SocialLogin from "./SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const { signInUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
        .then(result => {
            if (result.user) {
                navigate(from);
            }
        })
    }
        return (
            
            <div className="flex justify-center items-center">
                <ToastContainer></ToastContainer>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-300">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md" {...register("email", { required: true })}/>
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md" {...register("password", { required: true })}/>
                            {errors.password && <span className="text-red-500">This field is required</span>}
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm bg-black text-white">Sign in</button>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        );
    };

    export default Login;