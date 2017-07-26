import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
  	const dummyText = 'Sorry to see you go...';

    return(
			<Card>
				<CardTitle
					avatar="https://placeimg.com/80/80/animals"
					title="Avatar style title"
					subtitle="Subtitle here"
				/>
				<CardTitle
					title="Goodbye"
				/>
				<CardText>{dummyText}</CardText>
			</Card>
		);
  }
}

export default connect(null, actions)(Signout);
