import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-300">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Full Name</label>
                        <input type="text" name="name" placeholder="full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Photo URL</label>
                        <input type="text" name="photo" placeholder="photo url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
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