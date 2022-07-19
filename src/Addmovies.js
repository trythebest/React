import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



export function AddMovies({movieList,setMovieList}){
    
    
    const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate=useNavigate();
return(
<div className="Add-movies-form">

<TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
<TextField onChange={(event) => setPic(event.target.value)} label="Poster" variant="outlined" />
<TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
<TextField onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />
<TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" />
<Button onClick={() => {
  const newMovie = {
    name: name,
    pic: pic,
    rating: rating,
    summary: summary,
    trailer: trailer,
  };
  console.log(newMovie);
 

  // setMovieList([...movieList, newMovie])
  fetch("https://624e6fb677abd9e37c86ff94.mockapi.io/movies" ,
  {
    method:"POST",
    body:JSON.stringify(newMovie),
    headers:{
      "Content-Type":"application/json",
    }
}).then(() => navigate("/movie"))
     


}} variant="contained">ADDMOVIE</Button>

</div>
)
}