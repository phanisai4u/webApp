var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
var usersData = new Schema({
    user_id    : String,
    fname      : String,
    lname      : String,
    pwd        : String,
    age        : String,
    updated_at : Date
});

mongoose.model( 'usersData', usersData );
mongoose.connect( 'mongodb://localhost/usersData' );