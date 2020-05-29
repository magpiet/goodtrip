import React from 'react';
import Cards from './Cards';
import './Menu.css'

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	onReturnHome = () => {
		this.props.onRouteChange('home');
	}

	render() {
		const {options} = this.props;
		return(
			<div className='body'>
				{
					options.map((option, i) => {
						return (
							<Cards 
							name={options[i].name}
							about={options[i].about}
							link={options[i].link} 
							image={options[i].image}
							/>
						);
					})
				}
			</div>
		);
	}
}

export default Menu;