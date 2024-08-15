import { IoStarHalf } from "react-icons/io5";

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
                    <div>
                        <p><span className="font-semibold">Catergory:</span> Personal Care</p>
                        <p><IoStarHalf />4.4</p>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;