import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class EventDetails extends Component {
  	render(){
        const events = this.props.route.data;

        const name = this.props.params.name;

        const event = events.filter(event => {
            if(event.name == name) {
                return event;
            }
        });


        return (
        	<div className="container theme-showcase" role="main">
        		<div className="jumbotron">
			        <h1>{ event[0].name }</h1>
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                           <ul>
                               <li><strong>Name</strong>: {event[0].name}</li>
                               <li><strong>Venue</strong>: {event[0].venue}</li>
                               <li><strong>Start Date</strong>: {event[0].startDate}</li>
                               <li><strong>End Date</strong>: {event[0].endDate}</li>
                               <li><strong>Price</strong>: {event[0].price}</li>
                           </ul>
                        </div>
                    </div>
			    </div>
        	</div>
        );
    }
}
