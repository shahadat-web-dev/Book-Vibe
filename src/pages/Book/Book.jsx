import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // console.log(singleBook);

  const { bookName, image, rating, category, tags, yearOfPublishing, publisher, bookId } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow border border-gray-300 p-4 mb-14">
        <figure className="p-6 bg-[#F3F3F3] w-11/12 mx-auto rounded-b-xl">
          <img className="h-[184px]"
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">

          <div className="flex justify-between gap-10">
            {
              tags.map(tag => <button>{tag}</button>)
            }
          </div>

          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by : {publisher}</p>
          <div className="border-t-2 border-dashed border-t-gray-400"></div>
          <div className="card-actions justify-end">
            <div className="badge ">{category}</div>
            <div className="badge ">{rating} <FaStarHalfAlt /></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;