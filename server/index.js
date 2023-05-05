const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getNewCompliment, addItem, deletItem } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/newCompliment", getNewCompliment)

app.post('/api/db', addItem)
app.delete('/api/db/:id', deletItem)

app.listen(4000, () => console.log("Server running on 4000"));
