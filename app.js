var express=require("express");

var app = express();

var bodyParser=require("body-parser");

var mongoose=require("mongoose");

app.use(bodyParser.json());

Expediente=require('./models/expediente');


mongoose.connect('mongodb://localhost/expediente');

var db=mongoose.connection;

app.get('/',function (req,res) {
	// body...\
	res.send('hello world');
});


app.get('/api/expediente',function(req,res){

	Expediente.getExpediente(function (err,expediente) {
		// body...
		if(err){
			throw err;
		}
		res.json(expediente);
	});
});

app.get('/api/expediente/:_id',function(req,res){

	Expediente.getExpedienteId(req.params._id,function (err,expediente) {
		// body...
		if(err){
			throw err;
		}
		res.json(expediente);
	});
});

app.post('/api/expediente',function(req,res){

	Expediente.addExpediente(req.body,function (err,expediente) {
		// body...
		if(err){
			throw err;
		}
		res.json(expediente);
	});
	
});




app.listen(3000);

console.log('todo bien');