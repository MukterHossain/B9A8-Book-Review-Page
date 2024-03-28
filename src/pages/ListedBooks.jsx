import { Link } from "react-router-dom";


const ListedBooks = () => {
    return (
        <div className="mx-20 my-12">
            <div>
                <div className=" bg-gray-100 rounded-2xl">
                    <h1 className="text-[#131313] text-[28px] font-work font-bold text-center py-9">Books</h1>
                </div>
                <div className=" flex justify-center mt-6 mb-12">
                    <h2 className="w-48 py-2 text-white bg-[#23be0a] text-[28px] font-work font-bold text-center  rounded-lg">Sort By</h2>
                </div>
            </div>

        {/* Tabs */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to=''  className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                    
                    <span>Read Books</span>
                </Link>
                <Link to='wishlist'  className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                    <span>Wishlist Books</span>
                </Link>

            </div>
        </div>
    );
};

export default ListedBooks;