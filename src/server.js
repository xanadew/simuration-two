const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const massive=require('massive');
const session=require('express-session');
require('dotenv').config();

const app=express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance=>app.set('db',dbInstance));

const userController=require('./controllers/userController')
const propertyController=require('./controllers/propertyController')
const createInitialSession=require('./middlewares/sessions.js')

const port=process.env.PORT||9000;

app.listen(port,()=>{console.log(`ITS OVER ${port}`)});

app.use(session({
    secret:'SECRETSARENOFUNUNLESSYOUTELLEVERYONE',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:9001}
}));

app.use((req,res,next)=>createInitialSession(req,res,next));

app.use(express.static('../build'))

app.post('/api/auth/login', userController.login)
app.post('/api/auth/register', userController.register)
app.post('/api/auth/logout', userController.logout)

app.get('/api/properties', propertyController.getAllProperties)
app.get('/api/properties/filter', propertyController.getFilteredProperties)
app.post('/api/properties', propertyController.createNewProperty)
app.delete('/api/properties/:id', propertyController.deleteProperty)