

const Hero = () => {
    return (
        <div className="hero py-16 bg-base-200 rounded-xl">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/QmLB2kh/book2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="w-1/2">
                    <h1 className="text-[56px] font-playfair font-bold">Books to freshen up your bookshelf</h1>
                    <a className="btn mr-2 bg-[#23be0a] mt-8 text-white font-work text-[20px]">View The List</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;