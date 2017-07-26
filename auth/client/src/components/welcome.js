import React from 'react';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

const dummyText = 'Welcome to our slice of paradise';

export default () => (
	<Card style={{width: '400px'}}>
		<CardTitle
			avatar="https://placeimg.com/80/80/animals"
			title="Avatar style title"
			subtitle="Subtitle here"
		/>
		<CardTitle
			title="Welcome"
		/>
		<CardText>{dummyText}</CardText>
	</Card>
);

