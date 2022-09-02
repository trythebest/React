import "./App.css";
import { Colorgame } from "./Colorgame";
import { Like } from "./Like";
import { AddMovies } from "./Addmovies";
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardActions, CardContent, IconButton, Paper } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from "./MovieDetails";
import { MovieList } from "./MovieList";
import { EditMovie } from "./EditMovie";
import { NotFound } from "./NotFound";


export default function App() {

  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    },
  });

  return (

    <ThemeProvider theme={darkTheme}>
      <Paper elevation={2} style={{ minHeight: "100vh" }}>
        <div className="App">
          <AppBar position="sticky">
            <Toolbar>
              <Button onClick={() => navigate("/")} color="inherit">Home</Button>
              <Button onClick={() => navigate("/movie")} color="inherit">Movies</Button>
              <Button onClick={() => navigate("/colorgame")} color="inherit">Colorgame</Button>
              <Button onClick={() => navigate("/Addmovies")} color="inherit">AddMovies</Button>
              <Button startIcon={mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />} onClick={() => setMode(mode === "light" ? "dark" : "light")} color="inherit">{mode === "dark" ? "light" : "dark"}mode</Button>
            </Toolbar>
          </AppBar>
          <div className="router-place">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie" element={<MovieList />} />
              <Route path="/films" element={<Navigate replace to="/movie" />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
              <Route path="/colorgame" element={<Colorgame />} />
              <Route path="/Addmovies" element={<AddMovies />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
              <Route path="/404" element={<NotFound />} />


            </Routes>
          </div>



        </div>
      </Paper>
    </ThemeProvider>
  );
}
function Home() {
  return <h2>"welcome to the movie app 😎😍🤞😉"</h2>
}
export function Msg({ movie, id, deletebutton, editbutton }) {
  const [show, setShow] = useState(true)
  // const summarystyles={
  //   display: show ? "block":"none"
  // }
  const navigate = useNavigate();

  return (

    <div className="movie-container">
      <Card>
        <img className="movieposter" src={movie.pic} alt={movie.name} />
        <CardContent>
          <div className="moviespecs">
            <div className="details">
              <h5 className="moviename"> {movie.name}</h5>
              <IconButton onClick={() => navigate("/movie/" + id)} color="primary"><InfoIcon /></IconButton>
              <IconButton onClick={() => (setShow(!show))} className="summary" color="primary">
                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </div>
            <p className="movierating">⭐{movie.rating}</p>
          </div>
          {/* <p style={summarystyles} className="moviesummary">{movie.summary}</p> */}
          {show ? <p className="moviesummary">{movie.summary}</p> : null}
        </CardContent>
        <CardActions><Like />
          {deletebutton} {editbutton}</CardActions>

      </Card>
    </div>


  );
}


