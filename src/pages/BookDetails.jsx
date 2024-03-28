import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadPage } from "../utility/LocalStorage";


const BookDetails = () => {
    const books = useLoaderData()
    const { bookId } = useParams();
    const [book, setBook] = useState([])
    useEffect(() => {
        const singleBook = books.find(b => b.bookId === parseInt(bookId));
        setBook(singleBook)
    }, [bookId, books])

    // console.log(book)
    const { image, tag, bookName, author,review, category, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleBookRead = ()=>{
        saveReadPage(bookId)
        toast('you have read')
    }

    return (
        <div className="mx-24 my-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-2xl flex justify-center items-center">
                    <img src={image || placeholderImage} alt="" />
                </div>
                <div className="">
                    <div>
                        <h2 className="text-[40px] text-[#131313] font-playfair font-bold"> {bookName}</h2>
                        <p className="text-xl text-[#131313] font-work py-3">By : <span >{author}</span></p>
                        <hr />
                        <p className="text-xl text-[#131313] font-work py-3">{category}</p>
                        <hr />
                        <p className="text-xl text-[#131313] font-work py-3 opacity-60"><span className="text-[#131313] font-bold">Review :</span> {review}</p>
                    </div>
                    <div className="flex items-center py-5">
                        <p className="text-[#131313] text-[16px] font-work font-bold mr-2">Tag</p>
                        {
                            tag?.map(tags =>( <a  key={tags} className="text-green-600 mr-3 font-bold bg-gray-100 px-4 py-1 rounded-lg">#{tags}</a>

                            ))
                        }
                       
                    </div>
                    <hr />
                    <div>
                        <p>Number of Pages: {totalPages}</p>
                        <p>Publisher: {publisher}</p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <div className="mt-4">
                        <button onClick={handleBookRead} className="btn px-6 bg-green-600 text-white hover:bg-gray-100 hover:text-black mr-4">Read</button>
                        <button className="btn px-6 bg-[#50b1c9] text-white hover:bg-gray-100 hover:text-black">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;