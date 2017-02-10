import React from 'react';
import ReactDOM, { render } from 'react-dom';

import { Router, Route, browserHistory, LInk } from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import EventList from './components/EventList.jsx';
import EventDetails from './components/EventDetails.jsx';


const data = [
    {
        id: 1,
        name: 'Symphony Orchestra of India (SOI)',
        venue: 'Mumbai',
        startDate: 'Jan 30',
        endDate: 'Feb 11',
        media: 'https://in.bmscdn.com/events/eventbanner/1011367.jpg',
        price: '$16,811'
    }, {
        id: 2,
        name: 'Mahindra Blues Festival 2017',
        venue: 'Mumbai',
        startDate: 'Feb 11',
        endDate: 'Feb 12',
        media: 'https://in.bmscdn.com/events/eventbanner/1011342.jpg',
        price: '$16,811'
    }, {
        id: 3,
        name: 'Max Bupa - Walk for Health',
        venue: 'Multi City',
        startDate: 'Feb 12',
        endDate: 'Feb 26',
        media: 'https://in.bmscdn.com/events/eventbanner/1012570.jpg',
        price: '$16,811'
    }
];

render(
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <Route path="about" component={About} />

      <Route path="event" component={EventList} data={data}/>
      <Route path="event/:name" component={EventDetails} data={data}/>
      
      <Route path="home" component={Home} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>, 
  document.getElementById('root')
);

