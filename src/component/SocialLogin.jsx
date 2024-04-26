import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const SocialLogin = () => {

    const { gitHubLogin, googleLogin } = useAuth();

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={() => handleSocialLogin(googleLogin)} className="p-3 rounded-sm">
                    <FaGoogle />
                </button>
                <button onClick={() => handleSocialLogin(gitHubLogin)} className="p-3 rounded-sm">
                    <FaGithub></FaGithub>
                </button>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do not have an account?
                <Link to='/signUp' className="underline text-blue-700"> Sign up</Link>
            </p>
        </div>
    );
};

export default SocialLogin;