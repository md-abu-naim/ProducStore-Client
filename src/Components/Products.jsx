import { IoStarHalf } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";

const Products = () => {
    return (
        <div className="text-black">
            <div className="text-center lg:mb-10">
                <h1 className="uppercase underline text-2xl font-bold">Our Top Products</h1>
            </div>
            <div className="card border lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-4 pt-5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">Electric Razor</h2>
                    <div className="flex justify-between items-center">
                        <p><span className="font-semibold">Catergory:</span> Personal Care</p>
                        <p className="flex items-center"><IoStarHalf className="font-bold" /><span className="font-sans">4.4</span></p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p><span className="font-semibold">Date:</span>2024-07-17</p>
                        <p><span className="font-semibold mr-1">Date:</span>12:00 PM</p>
                    </div>
                    <p>Central hub for controlling smart home devices.</p>
                    <div className="card-actions">
                        <div className="relative w-full inline-flex items-center border justify-center px-6 py-3 overflow-hidden font-bold text-black rounded-md shadow-2xl group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-[#1B1616] to-gray-500 group-hover:opacity-100"></span>
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                            <span className="relative flex items-center text-xl"><BsCurrencyDollar />99.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;