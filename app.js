const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


const items = [];
const workItems = [];

app.get('/', (req, res) => {
    const day = date.getDate();
    // add new toDo item    
    res.render('lists', {listTitle: day, newListItem: items});
    
});

// post 
app.post('/', (req, res)=>{
    
    const item = req.body.addItem;
    if (req.body.list === 'Work') {
        workItems.push(item);
        res.redirect('/work');    
    } else {
        items.push(item);
        res.redirect('/');   
    };

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