import React,{useState} from 'react';
import Main from '../components/Main';
import Modal from '../components/Modal';
import Row from '../components/Row';
import requests from '../Requests'
import { MovieSet } from '../context/MovieContext';

const Home = () => {

    //const [movie,setMovie]=useState([]);
    const {movie,setMovie}=MovieSet()
    //const [showModal,setModal]=useState(false)
   const {showModal,setModal}=MovieSet()
    
   return(
    <>
        <Main setMovie={setMovie} />
        <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
        {showModal && <Modal />}
    </>
   )
};

export default Home;