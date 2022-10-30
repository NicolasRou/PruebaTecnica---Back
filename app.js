const express = require("express");
const cors = require("cors");
const commentsRoutes = require("./routes/comments");

const app = express();
const PORT = 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", commentsRoutes);


app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));