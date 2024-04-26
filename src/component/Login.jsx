import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const Login = () => {

    const { signInUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result);
            }).catch(error => {
                console.log(error);
            })
        }
        return (
            <div className="flex justify-center items-center">
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
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 rounded-sm">
                            <FaGoogle />
                        </button>
                        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                            <FaGithub></FaGithub>
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do not have an account?
                        <Link to='/signUp' className="underline text-blue-700"> Sign up</Link>
                    </p>
                </div>
            </div>
        );
    };

    export default Login;