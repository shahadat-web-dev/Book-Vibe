  import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../../utility/addToDB';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId);
  const { bookName, image, publisher, review, yearOfPublishing, rating, } = singleBook;

  const handleMarkAsRead = id => {
    // Store with ID
    // where to store
    // array or collection
    // if book already exist the show a alart
    // if book not exist then push in the collection or array
toast("Wow so easy!");
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });

 
    addToStoredDb(id)
  }

  return (
    <div className='w-2/3 mx-auto flex gap-12 py-12'>
      <div className='bg-[#F3F3F3] p-10 rounded-xl'>
        <img className=' md:h-[464px] md:w-[325px]' src={image} alt="" />
      </div>
      <ToastContainer></ToastContainer>
      <div>
        <h3 className='text-4xl font-bold'>{bookName}</h3>
        <h2 className='text-lg font-medium mt-4 text-[#727272]'>By : {publisher}</h2>
        <p className='w-[349px] pt-5'>{review}</p>
        <p className='pt-2 font-bold'>Year of Publishing : {yearOfPublishing}</p>
        <p className='pt-2 font-bold'>Rating : {rating}</p>
        <div className='pt-4'>
          <button onClick={() => handleMarkAsRead(id)} className="btn mr-4 font-bold">Read</button>
          <button className="btn mr-2 btn-info text-white">WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;