const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://blogs-project-node:test123@clusternodeproject.ngcq1oa.mongodb.net/node-project-blog?retryWrites=true&w=majority';
mongoose.connect(dbURI,  { useNewUrlParser: true, useUnifiedTopology: true })
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');     //set() let us configure application settings

//listen for request
// app.listen(3000);

//middleware & static file
app.use(express.static('public')); //by providing it to public we can use any static file like in this cae style.css

/*
// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
      title: 'new blog',
      snippet: 'about my new blog',
      body: 'more about my new blog'
    });

    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }); 

  app.get('/single-blog', (req, res) => {
     Blog.findById('65106d7f53471fc1e0a3dec2')
     .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  });
  */

//middleware
/* app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();  // Pass control to the next middleware or route handler
});
 instead of that below alternative code */

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); //for submiting form

//route
app.get('/', (req, res) => {
   /* const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title: 'Home', blogs }); */
    res.redirect('/blogs');
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});
 

//blog routes   
app.get('/blogs', (req, res) => {
    Blog.find().sort( { createdAt: -1 } )
    .then((result) => {
       res.render('index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
        console.log(err);
    })
});

app.post('/blogs', (req, res) => { 
  const blog = new Blog(req.body);

  blog.save()
    .then((result) => {
       res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    })
})


app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

//404 page with middleware
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
