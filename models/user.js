var mongose = require('mongoose');
mongose.connect('mongodb://localhost/facebooktool');
var Schema = mongose.Schema;

var schema = new Schema({
    username : {type : String, required : true},
    password : {type : String, required : true},
    usertoken : {type : String, required : true},
    state : {type : Number , required : false}
});

module.exports  = mongose.model('User',schema);