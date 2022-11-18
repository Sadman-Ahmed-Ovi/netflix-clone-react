import React,{useState} from 'react';
import { UserAuth } from '../context/AuthContext';
import { MovieSet } from '../context/MovieContext';
import { FaPlay,FaHeart, FaRegHeart } from 'react-icons/fa'
import {
  ThumbUpIcon,
} from '@heroicons/react/outline';
import Modal from '../components/Modal';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';


const MovieDetail = () => {
     const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
     const {movie}=MovieSet()
   const {showModal,setModal}=MovieSet()
    console.log(movie)
    const { user } = UserAuth();
    const movieID = doc(db, 'users', `${user?.email}`);
    const handleClick=()=>{
        setModal(true)
    }

    const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };
    return (
        <>
            <div className='w-full max-w-[500px] mx-auto px-4 py-4 '>
                <img className='w-full object-cover block' src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path
}`} />           
                <div className="md:flex justify-between  space-x-2 py-4">
              <button onClick={handleClick}className="flex items-center gap-x-2 rounded bg-white px-2 md:px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
                Watch Trailer
              </button>
              <button onClick={saveShow} className="text-white py-3" >
                 {like ? (
            <FaHeart className='h-6 w-6 text-gray-300' />
          ) : (
            <FaRegHeart className='h-6 w-6 text-gray-300' />
          )}
                 Add To favourites
              </button>
              
            </div>
                <div className='text-white font-semibold py-6 px-2'>
                    <h1>Title: {movie?.title}</h1>
                    <h1>Released: {movie?.release_date}</h1>
                    <h1>Rating: {movie?.vote_average}</h1>
                    <p>Overview: {movie?.overview}</p>
                </div>
            </div>
            {showModal && <Modal/>}
        </>
    );
};

export default MovieDetail;