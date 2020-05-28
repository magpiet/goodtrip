import React from 'react';
import './Cards.css';
import logo from './logo192.png';

const Card = () => {
	return (
		<div className='pa4 tc bg-light-red h w br3 fade-in'>
			<img src={logo} alt='' className='h4 w4'/>
			<div>
				<h2>Magnus</h2>
				<p>Nazar</p>
			</div>
		</div>
	);
}

export default Card;