import placeholderImage from '../assets/404.jpg'

const ErrorPage = () => {
    return (
        <div className=' '>
            <div className=' flex justify-center items-center'>
            <img className='w-80 h-80' src={placeholderImage} alt="" />
            </div>
            <h1 className='text-4xl text-center font-bold text-blue-600'>Page not found</h1>
        </div>
    );
};

export default ErrorPage;