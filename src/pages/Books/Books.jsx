import React, { Suspense} from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {


  // 1.
  // useEffect(() => {
  //   fetch("booksData.json")
  //     .then(res => res.json())
  //     .then(data => {
  //       setAllBooks(data)
  //     })
  // }, [])

  // 2
  // const bookPromise= fetch('./booksData.json').then(res => res.json())

  return (
    <div>
      <h1 className='text-[40px] font-bold text-center p-6'>Books</h1>
      <Suspense fallback={<div><progress className="progress w-56"></progress></div>}>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
         data.map((singleBook) => <Book singleBook={singleBook} key={singleBook.bookId}></Book>)
       }
       </div>
      </Suspense>
    </div>
  );
};

export default Books;