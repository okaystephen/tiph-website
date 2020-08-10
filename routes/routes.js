// import module `express`
const express = require('express');

// import module `controller` from `../controllers/controller.js`
const controller = require('../controller/controller.js');
const logIncontroller = require('../controller/logIncontroller.js');

const app = express();

// call function getIndex when client sends a request for '/' defined in routes.js
// controller
app.get('/', controller.getHomePage);
app.get('/home', controller.getHomePage);
app.get('/about', controller.getAboutUs);
app.get('/volunteer', controller.getVolunteer);
app.get('/pre-application', controller.getPreApp);
app.get('/application', controller.getApplication);
app.get('/projects', controller.getProjects);
app.get('/blog', controller.getBlogs);
app.get('/contact-us', controller.getContactUs);

app.get('/cms-login', controller.getCMSLogin);
app.post('/cms-login', logIncontroller.postLogIn);

app.get('/cms-home', controller.getCMSHome);
app.get('/cms-application', controller.getCMSApplication);
app.get('/cms-blog', controller.getCMSBlog);
app.get('/cms-project', controller.getCMSProject);
app.get('/cms-blog-page', controller.getCMSBlogPage);
app.get('/cms-project-page', controller.getCMSProjectPage);
app.get('/a-blog', controller.getABlog);
app.get('/a-project', controller.getAProject);

// enables to export app object when called in another .js file
module.exports = app;
