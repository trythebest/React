import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from "./global";

export function EditMovieForm({ movies }) {

  const navigate = useNavigate();
  const [name, setName] = useState(movies.name);
  const [pic, setPic] = useState(movies.pic);
  const [rating, setRating] = useState(movies.rating);
  const [summary, setSummary] = useState(movies.summary);
  const [trailer, setTrailer] = useState(movies.trailer);

  const editMovies = () => {
    const EditMovie = {
      name,
      pic,
      rating,
      summary,
      trailer,
    };
    console.log(EditMovie);

    fetch(`${API}/movies/${movies.id}`,
      {
        method: "PUT",
        body: JSON.stringify(EditMovie),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(() => navigate("/movie"));

  };


  return (
    <div className="Add-movies-form">
      

      <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" value={name} />
      <TextField onChange={(event) => setPic(event.target.value)} label="Pic" variant="outlined" value={pic} />
      <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" value={rating} />
      <TextField onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" value={summary} />
      <TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" value={trailer} />
      <Button onClick={editMovies} variant="contained">Save</Button>
      

    </div>
  );
}
