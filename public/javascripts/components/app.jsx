var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass/assets/javascripts/bootstrap');
var React = require('react');
var HelloWorld = require('./Jobs.jsx');

React.render(
    <HelloWorld />,
    document.getElementById('job-post')
);
