const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getNewCompliment, getMovies, addMovie, deleteMovie } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/newCompliment", getNewCompliment)
app.get('/api/movies', getMovies)
app.post('/api/movies', addMovie)
app.delete('/api/movies/:id', deleteMovie)


app.listen(4000, () => console.log("Server running on 4000"));
