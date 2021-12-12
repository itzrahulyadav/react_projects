import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const getClass = (vote) => {
   if(vote < 5)return "red";
   if(vote < 7)return "yellow";
   return "green";
}

const Movies = ({title,poster_path,overview,vote_average}) =>{
   return(
   <div className = 'movie'>
   <img src = {poster_path ? (IMG_API + poster_path):"htts://images.unsplash.com/photo-1639174277065-0d3df2d6290e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} alt = {title} />
   <div  className = "movie_info">
      <h3>{title}</h3>
      <span className = {`tag ${getClass(vote_average)}`}>{vote_average}</span>
   </div>
   <div className = "movie-story">
      <h3>overview:</h3>
      <p>{overview}</p>
   </div>
   </div>
   )
   
}

export default Movies;