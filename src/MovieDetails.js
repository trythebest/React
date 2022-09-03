import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { API } from "./global";

export function MovieDetails() {

  const { id } = useParams();
  const [movies, setMovies] = useState({});
  console.log(movies);

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovies(mv));
  });

  const navigate = useNavigate();
  return (<div className="info-page">
    <iframe width="798"
      height="449"
      src={movies.trailer}
      title="The Huntsman: Winter's War Official Trailer #1 (2016) - Chris Hemsworth, Charlize Theron Drama HD"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <div className="movie-details-container">
      <div className="moviespecs">
        <h5 className="moviename"> {movies.name}</h5>
        <p className="movierating">⭐{movies.rating}</p>
      </div>

      <p className="moviesummary">{movies.summary}</p>

      <Button onClick={() => navigate(-1)} variant="contained">back</Button>


    </div>
  </div>
  );
}
