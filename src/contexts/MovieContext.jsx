import { children, useContext } from "react";
import { createContext, useState, useEffect } from "react";

const MovieContext=createContext();
export const useMovieContext=()=> useContext(MovieContext)

export const MovieProvider=({children})=>{
    const [favorites,setFavorites]= useState([])
    useEffect(()=>{
        const storedFavs=localStorage.getItem("favorites")
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addToFavorites = (movie) => {
        console.log("Adding to favorites:", movie);
        setFavorites((prev) => [...prev, movie]);
      };
      
      const removeFromFavorites = (movieId) => {
        console.log("Removing from favorites:", movieId);
        setFavorites((prev) => prev.filter((movie) => movie.imdbID !== movieId));
      };

    const isFavorite=(movieId) =>{
        return favorites.some(movie=> movie.imdbID === movieId)
    }

    const value={

        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
{children}
</MovieContext.Provider>
    

}