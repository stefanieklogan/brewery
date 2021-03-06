import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import Image from '../../components/Image';
import HomePageAbout from '../../components/HomePageAbout';
import Checkins from '../../components/checkins';
import TransitionsModal from '../../components/Modal/index';

function Homepage() {
	return (
		<div>
			<TransitionsModal />
			<Jumbotron />
			<Checkins />
			<Image />
			<HomePageAbout />
			{/* <SignUpForm /> */}
		</div>
	);
}

export default Homepage;
