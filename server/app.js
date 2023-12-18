const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');
const mongoose = require("mongoose") ;

const app = express();


// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb+srv://archit:archit@cluster0.nx2znxl.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use('/graphql', graphqlHTTP({
 schema ,
 graphiql : true 
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});


