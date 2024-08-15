import { IoStarHalf } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([])
    // const [itemsPerPage, setItemPerPage] = useState(3)
    // const [currentPage, setCurrentPage] = useState(1)
    // const [count, setCount] = useState(0)

    // const numberOfPages = Math.ceil(count / itemsPerPage)
    // const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

    useEffect(() => {
       fetch(`http://localhost:5000/products`)
       .then(res => res.json())
       .then(data => {
        console.log(data);
        setProducts(data)
       })
    }, [])
    return (
        <div className="text-black">
            <div className="text-center lg:mb-10">
                <h1 className="uppercase underline text-2xl font-bold">Our Top Products</h1>
            </div>
           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                products?.map(product =>  <div key={product.name} className="card border bg-base-100 shadow-xl">
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

           <div className='flex justify-center mt-12'>
                <button
                    // disabled={ == 1}
                    // onClick={() => handlePagination(currentPage - 1)}
                    className='px-4 py-2 mx-1 text-black disabled:text-gray-500 capitalize bg-gray-300 rounded-md disabled:cursor-not-allowed disabled:hover:bg-[#786969] disabled:hover:text-white hover:bg-gray-700  hover:text-white'
                >
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>previous</span>
                    </div>
                </button>
                {/* {pages.map(btnNum => ( */}
                    <button
                        // onClick={() => handlePagination(btnNum)}
                        // key={btnNum}
                        // className={`hidden ${currentPage === btnNum ? 'bg-[#c59d5f] text-black' : ''}  px-4 py-2 mx-1 transition-colors duration-300 text-white transform  rounded-md sm:inline hover:bg-[#1B1616]  `}
                    >
                        {/* {btnNum} */}
                    </button>
                {/* ))} */}
                <button
                    // disabled={currentPage === numberOfPages}
                    // onClick={() => handlePagination(currentPage + 1)}
                    className='px-4 py-2 mx-1 text-black transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-700 disabled:hover:bg-[#1B1616] disabled:hover:text-white hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
                >
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Products;