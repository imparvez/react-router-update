import React, { Component } from 'react';
import { Link } from 'react-router';

export default class EventList extends Component {
  	render(){
        const events = this.props.route.data;

        const eventNode = events.map((event) => {
            return (
                <Link 
                    to={"event/"+event.name}
                    className="list-group-item"
                    key={ event.name }
                >
                    { event.name }
                </Link>
            )
        })
        return (
        	<div className="container theme-showcase" role="main">
        		<div className="jumbotron">
			        <h1>Events PAGE</h1>
                    <div className="list-group">
                        <p>{ eventNode }</p>
                    </div>
			    </div>
        	</div>
        );
    }
}
