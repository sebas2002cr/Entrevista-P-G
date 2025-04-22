const express = require('express');
const app = express();
const uuidv4 = require("uuid/v4")
const port = 3000;

let listBooks = [];

// id: string (UUID)
// title: string
// author: string
// year: number (year of publication)

app.use(express.json());

app.get('/', (req, res) => {
    return res.send("API is working.")
})

app.get('/books' , (req, res) => {

})

app.post('/new-book', (req, res) => {
    const {title, author, year} = req.body;

    if(!title ){
        return res.status(400).send({error: "No request body found."})
    }

    const newBook = {
        id : uuidv4() ,
        title : title,
        author : author,
        year: year

    }

    listBooks.push(newBook);

    res.send(newBook);

})

app.delete('/books/:id/delete' , (req, res) => {

})

app.put('/books/:id/update' , (req, res) => {

})

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
});