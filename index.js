const express=require('express');
const ejs=require('ejs');



const app=express();
const PORT= process.env.PORT|| 5000;


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

// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())


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
    // const output= `
    // <p> you have new contact request </p>
    // <h3>contact details</h3>
    // <ul>
    // <li>Name: ${req.body.name}</li>
    // <li>Email: ${req.body.email}</li>
    // <li>subject: ${req.body.subject}</li>    
    // </ul>
    // <h3>Messages</h3>
    // <p> ${req.body.message}</p>
    // `;
    // let transporter=nodemailer.createTransport({
    //     host:'http://mail.mandala-group.agency:2079',
    //     port:2079,
    //     secure:false,
    //     auth:{
    //         user:'info@mandala-group.agency',
    //         password:'12_Thflo0R'
    //     },
    //     tls:{
    //         rejectUnauthorized:false
    //     }
    // })
    // let mailOptions={
    //     from:'"website contact" <info@mandala-group.agency>',
    //     to:'info@mandala-group.agency',
    //     subject:'website-contact',
    //     Text:'Hello Mandala Group Inc.',
    //     html:output
    // }
    // transporter.sendMail(mailOptions, (error, info)=>{
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log('Message sent: %s', info.messageId)
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    // })
    res.render('home')
})
app.listen(PORT,()=>console.log(`server is up on port: ${PORT}`))