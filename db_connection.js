// connect to db
var mongoose = require('mongoose');
var mongoose_url = 'mongodb://localhost:27017/app' || 'mongodb://dibit_mongoadmin:Neith6Yeiy@localhost:20983';
mongoose.connect(mongoose_url);
var reportSchema = new mongoose.Schema({
    name : String,
    message: String
})

var dbMODEL = mongoose.model('reports', reportSchema);

exports.db = mongoose;
exports.dbModel= dbMODEL;