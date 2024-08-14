import bannerImg from '../assets/Banner.png'

const Banner = () => {
    return (
        <section className=" text-black">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="md:text-5xl text-xl mt-8 md:mt-0 font-bold md:leading-[50px]">Hello, Welcome to our <span className='text-gray-600'>ProducStore</span> Application</h1>
                    <p className="mt-6 mb-8 sm:mb-12">ProductStore: Your go-to online marketplace for a wide range of products with secure payments and fast delivery.</p>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={bannerImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;