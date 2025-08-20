import React from 'react'

const GenreFilter = ({genreList, setSelectedGenre}) => {
  return (
    <select className='p-2 bg-gray-900 text-white bg-opacity-60 backdrop-blur-md border rounded mb-4' 
    onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All Genre</option>
        {genreList.map(genre => {
            return(
                <option key= {genre} value= {genre.id}>{genre.name}</option>
            )
        })}
    </select>
  )
}

export default GenreFilter;