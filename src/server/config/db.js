const mongoose=require('mongoose')
const url='mongodb+srv://osama-admin:315454199@cluster0.inddq.mongodb.net/bank?retryWrites=true&w=majority'
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams).then( () => {
    console.log('Connected to database ')
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})