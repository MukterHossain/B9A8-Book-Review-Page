import { Link } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import placeholderImage from '../assets/404.jpg'


const BookCard = ({book}) => {
    const {bookId, image, tag, bookName, author, category, rating  } = book;
    return (
        <div className="border-2 border-gray-200 rounded-lg p-5">
            <Link  to={`/listed/${bookId}`} className="max-w-sm mx-auto transition hover:scale-105 group hover:no-underline focus:no-underline ">
                <img role="presentation" className="object-cover w-full p-16 rounded-lg dark:bg-gray-100 " src={image || placeholderImage} />
                <div className="p-6 space-y-2">
                    
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName}</h3>
                    <p>By: {author}</p>
                    <div className="flex justify-between">
                        <p>{category}</p>
                        <div className="flex justify-between items-center">
                        <p className="text-[16px] pr-2">{rating}</p>
                        <IoIosStarOutline size={20}></IoIosStarOutline>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;