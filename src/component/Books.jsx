import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

const Books = () => {
    const blogs = useLoaderData();
    console.log(blogs)
    return (
        <div>
            <section className=" dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div>
                        <h1 className="text-4xl text-center font-bold">Books</h1>
                    </div>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            blogs.map(book => 
                            <BookCard key={book.bookId} book={book}></BookCard>  
                             )
                        }              
                    </div>                   
                </div>
            </section>
        </div>
    );
};

export default Books;