import express from 'express';
const app = express();
app.use(express.json());

app.get("/", ( _ , res) => {
    console.log("ruta principal");
    res.send("Hola mundo");
})

app.listen(3000, () => {
    console.log("servidor ejecutandose en el puerto 3000")
})