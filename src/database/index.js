const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/noderest', 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false });
mongoose.Promise = global.Promise;

module.exports = mongoose;