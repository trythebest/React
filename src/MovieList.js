
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Msg } from "./App";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies=()=>{
    fetch("https://624e6fb677abd9e37c86ff94.mockapi.io/movies")
      .then((data) => data.json())
      .then((movies) => setMovieList(movies));
  }

  useEffect(() => {
    getMovies();
  },[]);
  const deleteMovie = (id)=>{

    console.log("delete movie:",id)

    fetch(`https://624e6fb677abd9e37c86ff94.mockapi.io/movies/${id}`, {method:"DELETE"} )
      .then(() => getMovies());

    
  }
  const navigate=useNavigate();
  return (


    <div className="movie-list">
      {movieList.map((mov) => (<Msg key={mov.id} movie={mov} id={mov.id} deletebutton={<IconButton onClick={()=>deleteMovie(mov.id)} style={{marginLeft:"auto"}}aria-label="delete" color="error"><DeleteIcon /></IconButton>} editbutton={<IconButton onClick={()=>navigate(`/movies/edit/${mov.id}`)} color="secondary"><EditIcon/></IconButton>}/>))}
    </div>

  );
  
}
