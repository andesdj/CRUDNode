const  express = require ('express');
const app = express();
const logger = require ('morgan');
const bodyParser = require('body-parser'); //entender peticiones posrt
const indexRoutes= require('./routes/index.js')
const  path= require('path');




// Settibngs
app.set('port', 3000);
app.use(logger('dev'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
app.use(bodyParser.urlencoded({extended: false}));

//Vistas o url para navegar
app.use('/', indexRoutes)


app.listen(app.get('port') ,()=>{
  console.log("Server OK ", app.get('port'));
})
