const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


let items = [];
let workItems = [];

app.get('/', (req, res) => {
    var today = new Date();
    
    // object to convert date to
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    // convert date to locale string as specified in options
    var day = today.toLocaleDateString('en-US', options);

    // add new toDo item
    
    
    res.render('lists', {listTitle: day, newListItem: items});
    
});
// post 
app.post('/', (req, res)=>{
    
    let item = req.body.addItem;
    if (req.body.list === 'Work') {
        workItems.push(item);
        res.redirect('/work');    
    } else {
        items.push(item);
        res.redirect('/');   
    };

    console.log(req.body);
});

app.get('/work', function(req, res) {
    res.render('lists', {listTitle: 'Work List', newListItem: workItems});
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log('Server listening on port 3000');
});