import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./Movies";
import './index.css';

const newapi = "https://api.themoviedb.org/3/search/movie?api_key=dc962be766f5d3bbfa4feb9ba07dafdf&query="
const FEATURED = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=
3fd2be6f0c70a2a598f084ddfb75487c&page=1`;


function App() {
       const [movies, setMovies] = useState([]);
       const [searchTerm,setSearchTerm] = useState("");
       useEffect(() => {
          fetch(FEATURED)
          .then(res =>res.json())
          .then(data =>{
             console.log(data);
            setMovies(data.results);
          });

       },[]);

        function handleSubmit(event){
           event.preventDefault();
            
           if(searchTerm){
           fetch(newapi + searchTerm)
           .then(res => res.json())
           .then(data =>{
             setMovies(data.results)
           })

           setSearchTerm("");
           }
        }




        const handleChange = (e) =>{
            setSearchTerm(e.target.value)
        }

        return( 
          <>
          <form onSubmit={handleSubmit}> 
          <header>
            <input className = "search" type = "text" placeholder = "search..."  value = {searchTerm} onChange = {handleChange}/>
          </header>
          </form>
        <div className="movie-container">
         {
             movies.length && movies.map((movie) =>(
               <Movies key = {movie.id} {...movie} />
             ))
         }
        </div>
        <h4>Made by Rahul yadav on 11 Nov 2021 at 2Am using React and APIs </h4>
        </>
        )
}

export default App;
