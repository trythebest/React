import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditMovieForm } from "./EditMovieForm";
import { API } from "./global";

export function EditMovie() {
  const { id } = useParams();
  const [movies, setMovies] = useState(null);


  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovies(mv));
  }, [id]);
  return (
    <div>
      {movies ? <EditMovieForm movies={movies} /> : "Loading..."}
    </div>

  );
}
