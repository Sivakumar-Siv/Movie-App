import React, { useEffect, useState } from 'react'
import Moviecard from "../components/Moviecard";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1 ${page}&api_key=bc8f076b196a34d3c28a7edbc05c433c`;
    if(search){
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=bc8f076b196a34d3c28a7edbc05c433c`;
    }
  
    fetch(url)
    .then((response) => response.json())
    .then((data) => setMovies(data.results));
  },[page, search]);
  
    return (
        <div className="p-4 pt-10">
            <input type="text" placeholder="Search Movies..."
                className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-700 bd-opacity-30 
            backdrop-blur-md text-white top-16 left-1/2  transform-translate-x-1/2 " />
            <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 ">
                {movies.map(movie => {
                    return (
                        <Moviecard key={movie.id} movie={movie} />
                    )
                })}

            </div>
            <div className="pagination-container flex justify-between mt-4">
                <button
                disabled={page == 1}
                    className='p-3 bg-gray-700 text-white rounded'
                    onClick={()=> {
                        setPage(prev => prev - 1);
                    }}>PREVIOUS</button>
                <button className='p-3 bg-gray-700 text-white rounded'
                     onClick={()=> {
                        setPage(prev => prev + 1);
                    }}>NEXT</button>
            </div>
        </div>
    );
};

export default Home;
