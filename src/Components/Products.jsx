import { IoStarHalf } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
       fetch('/products.json')
       .then(res => res.json())
       .then(data => setProducts(data))
    }, [])
    return (
        <div className="text-black">
            <div className="text-center lg:mb-10">
                <h1 className="uppercase underline text-2xl font-bold">Our Top Products</h1>
            </div>
           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map(product =>  <div key={product.name} className="card border bg-base-100 shadow-xl">
                    <figure className="px-4 pt-5">
                        <img
                            src={product.image}
                            alt="Shoes"
                            className="rounded-xl h-[262px]" />
                    </figure>
                    <div className="card-body  ">
                        <h2 className="md:text-xl font-extrabold">{product.name}</h2>
                        <div className="flex justify-between items-center">
                            <p><span className="font-semibold">Catergory:</span> {product.category}</p>
                            <p className="flex items-center"><IoStarHalf className="font-bold" /><span className="font-sans">{product.rating}</span></p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p><span className="font-semibold">Date:</span>{product.date}</p>
                            <p><span className="font-semibold mr-1">Date:</span>{product.time}</p>
                        </div>
                        <p>{product.description}</p>
                        <div className="card-actions">
                            <div className="relative w-full inline-flex items-center border justify-center px-6 py-3 overflow-hidden font-bold text-black rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-[#1B1616] to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative flex items-center hover:text-white text-xl font-sans"><BsCurrencyDollar />{product.price}</span>
                            </div>
                        </div>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default Products;