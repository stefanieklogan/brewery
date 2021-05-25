import React from 'react';
import Jumbotron from '../../components/Jumbotron';
import Image from '../../components/Image';
import HomePageAbout from '../../components/HomePageAbout';
import Footer from '../../components/Footer';
import Copyright from '../../components/Copyright/';

function Homepage() {
	return (
		<div>
			<Jumbotron />
			<Image />
			<HomePageAbout />
			{/* <SignUpForm /> */}
			{/* <Footer /> */}
			{/* <Copyright /> */}
		</div>
	);
}

export default Homepage;
