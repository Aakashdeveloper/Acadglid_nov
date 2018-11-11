import express from 'express';



let app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

let nav = [
    {link: '/movies', name:'Movies'},
    {link: '/artist', name:'artist'},
    {link: '/about', name:'About'}
]

let moviesRouter = require('./src/routes/moviesRoute')(nav);
let artistRouter = require('./src/routes/ArtistRoute')(nav);

app.use('/movies', moviesRouter);
app.use('/artist', artistRouter);



app.get('/',(req,res) => { 
    res.render('index',{
        title: 'Home Page',
        nav:nav

    })
})

app.listen(2300, (err) => {
    console.log("server running on port 2300")
})