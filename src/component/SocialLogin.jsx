import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const SocialLogin = () => {

    const { gitHubLogin, googleLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || '/';

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(from);
                }
            })
    }
    return (
        <div>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-xl dark:text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={() => handleSocialLogin(googleLogin)} className="p-3 rounded-sm">
                    <FaGoogle className="text-3xl"/>
                </button>
                <button onClick={() => handleSocialLogin(gitHubLogin)} className="p-3 rounded-sm">
                    <FaGithub className="text-3xl"></FaGithub>
                </button>
            </div>
            <p className="text-sm !mt-8 text-center text-gray-800">Do Not have an account <Link to='/signUp' className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
        </div>
    );
};

export default SocialLogin;

