import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import Image from '../../components/Image';
import HomePageAbout from '../../components/HomePageAbout';
import Checkins from '../../components/checkins';
import TransitionsModal from '../../components/modal/index';

function Homepage() {
	return (
		<div>
			<TransitionsModal />
			<Checkins/>
			<Jumbotron />
			<Image />
			<HomePageAbout />
			{/* <SignUpForm /> */}
		</div>
	);
}

export default Homepage;
