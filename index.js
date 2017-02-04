let mongoose = require('mongoose');
let Types = mongoose.Schema.Types;
mongoose.connect('mongodb://localhost/treelly');
let db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', function(){
    let nodeSchema = mongoose.Schema({
        name: String,
        fatherNode: Types.ObjectId 
    });
    let sourceSchema = mongoose.Schema({
        name: String,
        attachTo: [Types.ObjectId]
    });
});
