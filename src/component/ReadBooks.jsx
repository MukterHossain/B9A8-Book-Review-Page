import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadPage } from "../utility/LocalStorage";


const ReadBooks = () => {
    const reads = useLoaderData();
    console.log(reads)
    useEffect(()=>{
        const storedReadId = getStoredReadPage();
        if(reads.length > 0){
            const bookRead = reads.filter(read => storedReadId.includes(read.bookId))
            console.log(reads, storedReadId, bookRead)
        }
    },[])
    return (
        <div className="mx-20 my-12">
            <h1>Hello Read Books</h1>
            
        </div>
    );
};

export default ReadBooks;