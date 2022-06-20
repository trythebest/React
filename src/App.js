import "./App.css";
import { Colorgame } from "./Colorgame";
import { Like } from "./Like";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, useParams, Navigate } from "react-router-dom";

let movies = [
  {
    id: "100",
    name: "RRR",
    pic:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    id: "101",
    name: "Iron man 2",
    pic:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    id: "102",
    name: "No Country for Old Men",
    pic:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    id: "103",
    name: "Jai Bhim",
    pic:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    id: "104",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    pic:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    id: "105",
    name: "Interstellar",
    pic: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: "106",
    name: "Baahubali",
    pic: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    id: "107",
    name: "Ratatouille",
    pic:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
  }
];

let INITIALMOVIELIST = movies;


export default function App() {

  return (

    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movie">Movies</Link></li>
          <li><Link to="/colorgame">Colorgame</Link></li>

        </ul>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieList />} />
        {/* <Route path="/films" element={<Navigate replace to ="/movie" />} /> */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/colorgame" element={<Colorgame />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<NotFound />} />

      </Routes>



    </div>
  );
}
function NotFound() {
  return <h1>404 Error</h1>
}
function MovieDetails() {
  const { id } = useParams();
  let movies = INITIALMOVIELIST[id]
  console.log(movies);

  const navigate = useNavigate()
  return (<div>
    <iframe width="798"
      height="449"
      src={movies.trailer}
      title="The Huntsman: Winter's War Official Trailer #1 (2016) - Chris Hemsworth, Charlize Theron Drama HD"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <div className="movie-details-container">
      <div className="moviespecs">
        <p className="movierating">⭐{movies.rating}</p>
      </div>

      <p className="moviesummary">{movies.summary}</p>

      <button onClick={() => navigate(-1)}>back</button>
    </div>
  </div>
  )
}
function Home() {
  return <h2>"welcome to the movie app 😎😍🤞"</h2>
}

function MovieList() {

  const [movies, setMovies] = useState("INITIALMOVIESLIST");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  return (
    <div>
      <div className="Add-movies-form">
        <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Name" />
        <input onChange={(event) => setPic(event.target.value)} type="text" placeholder="poster" />
        <input onChange={(event) => setRating(event.target.value)} type="text" placeholder="Rating" />
        <input onChange={(event) => setSummary(event.target.value)} type="text" placeholder="Summary" />
        <input onChange={(event) => setTrailer(event.target.value)} type="text" placeholder="Trailer" />
        <button onClick={() => {
          const newMovie = {
            name: name,
            pic: pic,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          console.log(newMovie);

          setMovies([...movies, newMovie])
        }} >
          ADDMOVIE
        </button>
      </div>
      <div className="movie-list">
        {movies.map((mov, index) => (<Msg key={index} movie={mov} id={index} />))}
      </div>
    </div>
  )
}

function Msg({ movie, id }) {
  const [show, setShow] = useState(true)
  // const summarystyles={
  //   display: show ? "block":"none"
  // }
  const navigate = useNavigate();

  return (

    <div className="movie-container">
      <img className="movieposter" src={movie.pic} alt={movie.name} />
      <div className="moviespecs">
        <h5 className="moviename"> {movie.name}</h5>
        <p className="movierating">⭐{movie.rating}</p>
      </div>
      <button onClick={() => navigate("/movie/" + id)}>info</button>
      <button onClick={() => (setShow(!show))} className="summary">toggle summary</button>
      {/* <p style={summarystyles} className="moviesummary">{movie.summary}</p> */}
      {show ? <p className="moviesummary">{movie.summary}</p> : null}
      <Like />
    </div>

  );
}

