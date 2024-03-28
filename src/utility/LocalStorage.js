

const getStoredReadPage  = () =>{
    const storedReadPage = localStorage.getItem('read-page');
    if(storedReadPage){
        return JSON.parse(storedReadPage);
    }
    return [];
}

const saveReadPage = bookId =>{
    const storedReadPages = getStoredReadPage();
    const exists = storedReadPages.find(Id => Id === bookId);
    if(!exists){
        storedReadPages.push(bookId);
        localStorage.setItem('read-page', JSON.stringify(storedReadPages))
    }
}




export {getStoredReadPage, saveReadPage}



