import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export function MovieContextProvider({ children }) {

    const [movie, setMovie] = useState([]);
    const [showModal,setModal]=useState(false)

    return (
        <MovieContext.Provider value={{ movie, setMovie,showModal,setModal}}>
            {children}
        </MovieContext.Provider>

    )
}

export function MovieSet() {
  return useContext(MovieContext);
}