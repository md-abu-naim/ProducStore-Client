import { IoStarHalf } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const [brandFilter, setBrandFilter] = useState('')
    const [sort, setSort] = useState('')
    const [minPrice, setMinprice] = useState(0)
    const [maxPrice, setMaxprice] = useState(0)
    // eslint-disable-next-line no-unused-vars
    const [itemsPerPage, setItemPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [details, setDetails] = useState([])


    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

    // handle search
    const handleSearch = e => {
        e.preventDefault()
        const text = e.target.search.value
        setSearch(text)
        e.target.reset()
    }

    // handle price rang
    const handlePriceRang = e => {
        e.preventDefault()
        const minPrice = e.target.minPrice.value
        const maxPrice = e.target.maxPrice.value
        console.log(minPrice, maxPrice);
        setMinprice(minPrice)
        setMaxprice(maxPrice)
    }

    // handle pagination
    const handlePagination = (value) => {
        setCurrentPage(value);
    }

    // handle reset option
    const handleReset = () => {
        setSearch('')
        setFilter('')
        setBrandFilter('')
        setSort('')
        setMaxprice(0)
        setMinprice(0)
    }

    const handleShowModal = (product) => {
        console.log(product);
        document.getElementById('my_modal_4').showModal()
        setDetails(product)
    }

    // data fatching
    useEffect(() => {
        fetch(`https://produc-store.vercel.app/products?search=${search}&page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&brand=${brandFilter}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [search, currentPage, itemsPerPage, filter, sort, brandFilter, minPrice, maxPrice])

    // data count fatching
    useEffect(() => {
        fetch(`https://produc-store.vercel.app/products-count?filter=${filter}&brand=${brandFilter}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
            })
    }, [brandFilter, filter, maxPrice, minPrice])
    return (
        <div className="text-black">
            {/* heading */}
            <div className="text-center lg:mb-10">
                <h1 className="uppercase underline text-2xl font-bold">Our Top Products </h1>
            </div>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="px-3 mt-2" >
                <label className="input  input-bordered flex items-center max-w-sm mx-auto  gap-2">
                    <input type="text" name="search" className="grow text-black" placeholder="Search Products" />
                    <button className="btn bg-gray-700 hover:bg-gray-500  border-none text-white font-bold">Search</button>
                </label>
            </form>

            {/* filtering */}
            <div className="mt-3 lg:flex flex-col p-3 md:flex-row gap-3 ">

                {/* category filter */}
                <div className="flex p-2  flex-col md:flex-row gap-3">
                    <select
                        onChange={e => {
                            setFilter(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={filter}
                        className='border w-full p-4 rounded-lg'
                    >
                        <option value=''>Filter By Category</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Accessories'>Accessories</option>
                        <option value='Kitchen'>Kitchen</option>
                        <option value='Fitness'>Fitness</option>
                    </select>

                    {/* brand filter */}
                    <select
                        onChange={e => {
                            setBrandFilter(e.target.value)
                            setCurrentPage(1)
                        }}
                        value={brandFilter}
                        className='border w-full p-4 rounded-lg'
                    >
                        <option value=''>Filter By Brand</option>
                        <option value='Apple'>Apple</option>
                        <option value='GadgetPro'>GadgetPro</option>
                        <option value='TechSound'>TechSound</option>
                        <option value='SoundWave'>SoundWave</option>
                    </select>
                </div>

                {/* price rang form */}
                <form onSubmit={handlePriceRang} className="flex p-2 justify-between items-center flex-col md:flex-row gap-2">
                    <label className="input w-full input-bordered flex items-center gap-2">
                        <input type="number" name="minPrice" className="grow " placeholder="Min-Price" />
                    </label>
                    <label className="input w-full input-bordered flex items-center gap-2">
                        <input type="number" name="maxPrice" className="grow" placeholder="Max-Price" />
                    </label>
                    <button className="btn bg-gray-700 hover:bg-gray-500  border-none text-white font-bold">Submit</button>
                </form>

                {/* sorting */}
                <div className="flex justify-between items-center gap-3">
                    <select
                        onChange={e => {
                            setSort(e.target.value)
                        }}
                        value={sort}
                        className='border w-full p-4 rounded-lg'
                    >
                        <option value=''>Sort By</option>
                        <option value='asc'>Price: High to Low</option>
                        <option value='dsc'>Price: Low to High</option>
                        <option value='date'>Date: Newest First</option>
                    </select>
                    <button onClick={handleReset} className="btn bg-gray-700 hover:bg-gray-500  border-none text-white font-bold">Reset</button>
                </div>
            </div>

            {/* display products card */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    products?.map(product => <div key={product.name} className="card border bg-base-100 shadow-xl">
                        <figure className="px-4 pt-5">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="rounded-xl h-[262px]" />
                        </figure>
                        <div className="card-body  ">
                            <h2 className="md:text-xl font-extrabold">{product.name}</h2>
                            <div className="flex justify-between gap-7 items-center">
                                <p><span className="font-semibold">Catergory:</span> {product.category}</p>
                                <p className="flex items-center"><IoStarHalf className="font-bold" /><span className="font-sans">{product.rating}</span></p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p><span className="font-semibold">Date:</span>{product.date}</p>
                                <p className="flex items-center"><span className="font-semibold mr-1 ">Price:</span><span className="flex items-center"><BsCurrencyDollar />{product.price}</span></p>
                            </div>
                            <p>{product.description}</p>
                            <div className="card-actions">
                                <button onClick={()=>handleShowModal(product)} className="relative w-full inline-flex items-center border justify-center px-6 py-3 overflow-hidden font-bold text-black rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-[#1B1616] to-gray-500 group-hover:opacity-100"></span>
                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative flex items-center hover:text-white text-xl font-sans">View Details</span>
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            {/* pagination */}
            <div className='flex justify-center mt-12'>

                {/* previous button */}
                <button
                    disabled={currentPage == 1}
                    onClick={() => handlePagination(currentPage - 1)}
                    className='px-4 py-2 mx-1  disabled:text-gray-300 capitalize bg-gray-400 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-gray-700  hover:text-white'>
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

                {/* button number */}
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePagination(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage === btnNum ? 'bg-gray-400 border-none' : ''} px-4 py-2 mx-1 font-sans bg-gray-200 transition-colors border duration-300 transform  rounded-md sm:inline hover:bg-gray-700 hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}

                {/* next button */}
                <button
                    disabled={currentPage === numberOfPages}
                    onClick={() => handlePagination(currentPage + 1)}
                    className='px-4 py-2 mx-1  transition-colors duration-300 transform bg-gray-400 rounded-md hover:bg-gray-700 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
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

            {/* modal */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button> */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box max-w-5xl">
                    <div className="flex flex-col lg:flex-row">
                        <div className="border-r-8">
                            <img className="w-[500px] " src={details.image} alt="" />
                        </div>
                        <div className="p-5 space-y-4">
                            <h1 className="text-5xl font-extrabold">{details.name}</h1>
                            <div className="flex justify-between gap-7 items-center mt-4">
                                <p><span className="font-semibold">Catergory:</span> {details.category}</p>
                                <p className="flex items-center"><span className="font-semibold">Ratings: </span><IoStarHalf className="font-bold" /> <span className="font-sans">{details.rating}</span></p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p><span className="font-semibold">Date: </span><span className="font-sans">{details.date}</span></p>
                                <p className="flex items-center"><span className="font-semibold mr-1 ">Time:</span><span className="flex items-center font-sans">{details.time}</span></p>
                            </div>
                            <p><span className="font-semibold">Description: </span>{details.description}</p>
                            <button className="relative w-full inline-flex items-center border justify-center px-6 py-3 overflow-hidden font-bold text-black rounded-md shadow-2xl group">
                                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-[#1B1616] to-gray-500 group-hover:opacity-100"></span>
                                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                    <span className="relative flex items-center hover:text-white text-xl font-sans"><BsCurrencyDollar />{details.price}</span>
                                </button>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Products;