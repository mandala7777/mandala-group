const express=require('express');
const bodyParser=require('body-parser')
const ejs=require('ejs');


const app=express();
const PORT= process.env.PORT|| 8000;

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended:false }))

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname+'public/css'))
app.use('/js', express.static(__dirname+'public/js'))
app.use('/img', express.static(__dirname+'public/img'))
app.use(express.json()); //this line activates the bodyparser middleware
app.use(express.urlencoded({ extended: true }));

//set the view engine
app.set('views','./views')
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
    res.render('home')
    
}) 

app.get('/feature', (req, res)=>{
    res.render('feature')
})
app.get('/immigration', (req, res)=>{
    res.render('immigration')
})
app.get('/start-up', (req, res)=>{
    res.render('start-up')
})
app.get('/supply', (req, res)=>{
    res.render('supply')
})
app.get('/aboutus', (req, res)=>{
    res.render('aboutus')
})
app.get('/contact', (req, res)=>{
    res.render('contactus')
})

app.get('/shop', (req, res)=>{
    res.render('shop')
    
})
app.get('/appointment', (req, res)=>{
    res.render('appointmentus')
    
})
app.post('/send', (req, res)=>{
    console.log(req.body)
})
app.listen(PORT,()=>console.log(`server is up on port: ${PORT}`))