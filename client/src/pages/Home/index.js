import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import Image from '../../components/Image';
import HomePageAbout from '../../components/HomePageAbout';
import Footer from '../../components/Footer';

function Homepage() {
	return (
		<div>
			<Jumbotron />
			<Image />
			<HomePageAbout />
			{/* <SignUpForm /> */}
			<Footer />
			{/* <Copyright /> */}
		</div>
	);
}

export default Homepage;
