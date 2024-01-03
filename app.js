require('dotenv').config();
const express = require('express');
const { userRoutes, productRoutes, categoryRoutes, commentRoutes } = require('./routes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/comments', commentRoutes);

app.get('/', (req, res) => {
    res.send('Salam');
})

app.all('*', (req, res) => {res.send('404 - NOT FOUND')});

app.listen(PORT, () => {console.log(`server is running on port: ${PORT} !`)});