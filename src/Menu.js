import React from 'react';
import Cards from './Cards';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	onReturnHome = () => {
		this.props.onRouteChange('home');
	}

	render() {
		return(
			<div className='menu pa5'>
				<Cards />
			</div>
		);
	}
}

export default Menu;