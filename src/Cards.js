import React from 'react';
import './Cards.css';

const Card = ({name, about, link, image}) => {
	return (
		<div className='tc bg-navy pa1 dib h w br4 ma3 fade-in shadow-5'>
			<img onClick={() => window.open(link, '_blank')} src={image} alt='' className='grow pa2 h5 w5'/>
			<div>
				<h1 className='b white'>{name}</h1>
				<p className='b white'>{about}</p>
			</div>
		</div>
	);
}

export default Card;