import { useLoaderData } from "react-router-dom";


const EBook = () => {
    const books = useLoaderData();
    console.log(books)
    return (
        <div className="mx-20 my-12">
            <h1>E book</h1>
        </div>
    );
};

export default EBook;