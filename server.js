const  express=require('express');
const app=express();

app.use(express.static('static/jsx'));
//app.use('/static', express.static(path.join(__dirname, 'public')))
//app.use('/static',express.static('public'));
app.listen(3000, function () {
 console.log('App started on port 3000');
});

