
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'


const BookDetails = () => {
    const books = useLoaderData()
    const { bookId } = useParams();
    const [book, setBook] = useState([])
    useEffect(() => {
        const singleBook = books.find(b => b.bookId === parseInt(bookId));
        setBook(singleBook)
    }, [bookId, books])

    console.log(book)
    const { image, tag, bookName, author, category, rating  } = book;
    return (
        <div className="mx-20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <img src={image || placeholderImage}  alt="" />
                </div>
                <div>
                    <h2> {bookName}</h2>
                    <p>By: {author}</p>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;