import React from 'react';
import bookimage from '../../assets/pngwing 1.png'
const Banner = () => {
  return (
    <div className='bg-[#F3F3F3] flex justify-around md:py-20 items-center mt-14 mb-24 rounded-3xl'>
      <div>
        <h1 className='text-5xl font-bold pb-12'>Books to freshen up <br /> your bookshelf</h1>
        <button className='btn bg-[#23BE0A] text-white px-7 py-5 text-xl rounded-lg'>View The List</button>
      </div>
      <div>
        <img className='' src={bookimage} alt="" />
      </div>
    </div>
  );
};

export default Banner;