
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAuth from "../Hook/useAuth";


const SignUp = () => {

    const { createUser } = useAuth();
    const navigate = useNavigate();
    const from = '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password} = data;
        createUser(email, password)
        .then(() => {
            navigate(from)
        })
    }

    const passwordValidation = {
        required: "Password is required",
        minLength: {
            value: 6,
            message: "Password must have at least 6 characters"
        },
        validate: {
            uppercase: v => /[A-Z]/.test(v) || "Password must include an uppercase letter",
            lowercase: v => /[a-z]/.test(v) || "Password must include a lowercase letter",
        }
    };

    return (
        <div className="flex justify-center items-center mt-20">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-300">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Full Name</label>
                        <input type="text" name="name" placeholder="full Name" className="w-full px-4 py-3 rounded-md" {...register("fullName", { required: true })} />
                        {errors.fullName && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Photo URL</label>
                        <input type="text" name="photo" placeholder="photo url" className="w-full px-4 py-3 rounded-md"  {...register("photo", { required: true })} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md "  {...register("password", passwordValidation)} />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-black text-white">Sign Up</button>
                </form>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Have an Account?
                    <Link to='/login' className="underline text-blue-700"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;