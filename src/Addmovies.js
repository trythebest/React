import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import {  useFormik } from 'formik';
import * as yup from 'yup';


const formValidationSchema=yup.object({
  name: yup.string().required(),
  pic: yup.string().required().min(5),
  rating: yup.number().required().min(0).max(10),
  summary: yup.string().required().min(20),
  trailer:yup.string().required().min(10)
});

export function AddMovies(){

    const { handleSubmit,
      values,
      handleChange,
      handleBlur,
      errors,
      touched}=
      useFormik({initialValues:{
        name:"",
        pic:"",
        rating:"",
        summary:"",
        trailer:""
      },
      validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
      addMovie(values);
    }
  });

  const navigate=useNavigate();

  const addMovie= (newMovie) => {   
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

  }
return(
<form onSubmit={handleSubmit} className="Add-movies-form">

<TextField name='name' onChange={handleChange}  onBlur={handleBlur} value={values.name} label="Name" variant="outlined" error={errors.name && touched.name} /> {errors.name && touched.name ? errors.name : ""}
<TextField name='pic' onChange={handleChange} onBlur={handleBlur} value={values.pic} label="Poster" variant="outlined" error={errors.pic && touched.pic} /> {errors.pic && touched.pic ? errors.pic : ""}
<TextField name='rating' onChange={handleChange} onBlur={handleBlur} value={values.rating} label="Rating" variant="outlined" error={errors.rating && touched.rating} /> {errors.rating && touched.rating ? errors.rating : ""}
<TextField name='summary'onChange={handleChange} onBlur={handleBlur} value={values.summary} label="Summary" variant="outlined" error={errors.summary && touched.summary} /> {errors.summary && touched.summary ? errors.summary : ""}
<TextField name='trailer'onChange={handleChange} onBlur={handleBlur} value={values.trailer} label="Trailer" variant="outlined" error={errors.trailer && touched.trailer} /> {errors.trailer && touched.trailer ? errors.trailer : ""}
<Button type='sumbit' variant="contained">ADDMOVIE</Button>

</form>
)
}