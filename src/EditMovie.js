import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditMovieForm } from "./EditMovieForm";

export function EditMovie() {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);


  useEffect(() => {
    fetch(`https://624e6fb677abd9e37c86ff94.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovies(mv));
  }, [id]);
  return (
    <div>
      {movies ? <EditMovieForm movies={movies} /> : "Loading..."}
    </div>

  );
}
