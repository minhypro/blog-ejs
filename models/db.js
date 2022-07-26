import mongoose from 'mongoose'
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true })
// Validation
mongoose.connection
    .once('open', () => console.log('Connected to the database!'))
    .on('error', err => console.log('Error with the database!', err));