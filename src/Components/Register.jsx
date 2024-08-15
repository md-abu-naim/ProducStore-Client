import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Register = () => {

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value;
        const newUser = { name, email, password }
        console.log(newUser);

        // e.target.reset()

        if (password === '') {
            return toast.error('Please fulfill your form')
        }
        else if (password.length < 5) {
            return toast.error('Password should be at least 5 characters or longer')
        }

        else if (!/^\d+$/.test(password)) {
            return toast.error('Password must contain only numbers.')
        }

        // createUser(email, password)
        //     .then(result => {
        //         console.log(result.user);
        //     })
        //     .catch(error => toast.error(error.message))

    }
    return (
        <div>
            <div className="  py-8 ">
                <div className="w-full  font-serif max-w-md p-6 text-black m-auto mx-auto bg-gray-300 rounded-2xl shadow-md dark:bg-gray-800">
                    <h2 className='text-2xl my-3 font-bold text-center'>ProducStore</h2>
                    <h2 className='text-2xl my-3 font-bold text-center'>Please Sign UP.</h2>
                    <form onSubmit={handleSignIn}>

                        <div className="pb-2">
                            <label className="block text-sm text-black dark:text-gray-200">Name*</label>
                            <input type="text" name="name" placeholder="Type your Name" className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="pb-2">
                            <label className="block text-sm text-black dark:text-gray-200">Email*</label>
                            <input type="email" name="email" placeholder="Enter your Email" className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm text-black dark:text-gray-200">Password*</label>
                            <input type="password" name="password" placeholder="Enter your password" className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                            <button className="relative w-full inline-flex items-center justify-center border-2 px-6 py-3 overflow-hidden font-bold text-black rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-[#1B1616] to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative">Sign IN</span>
                            </button>
                        </div>
                    </form>
                    <p className="mt-8 text-xs font-light text-center text-black"> Already have an account? <Link to='/login' className="font-bold text-blue-700 dark:text-gray-200 hover:underline">Sign UP</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;