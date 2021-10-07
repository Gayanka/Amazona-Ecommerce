import express from "express";
import data from './data.js'

//create an app from express
const app = express();

//return products from server
app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5000;
//make our server running
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

