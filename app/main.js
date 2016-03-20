import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer'
import Description from './components/Description'
import FilterableProjects from './components/FilterableProjects'
import ContactUs from './components/ContactUs'

$(function(){ //i couldn't figure out how to load it after react renders the DOM
	setTimeout(function(){ startMixItUp() }, 500);
});

ReactDOM.render(<FilterableProjects />, document.getElementById('project-items'));
ReactDOM.render(<ContactUs />, document.getElementById('contact-us'));

function startMixItUp(){
	$('.portfolio-container').mixItUp({
		load: {
			filter: '.star'
		}
	});
}