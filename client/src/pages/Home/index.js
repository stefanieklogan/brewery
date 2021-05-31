import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import Image from '../../components/Image';
import HomePageAbout from '../../components/HomePageAbout';

function Homepage() {
	return (
		<div>
			<Jumbotron />
			<Image />
			<HomePageAbout />
			{/* <SignUpForm /> */}
		</div>
	);
}

export default Homepage;
