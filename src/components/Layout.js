import React from 'react';
import {Link} from 'react-router-dom';

class Layout extends React.Component {
	constructor(props){
		super(props);

		this.state = {active: ''};
	}

	isActive(button){
		if(button === this.state.active){
			return 'nav-link active';
		} else return 'nav-link';
	}
	render(){
		return (
			<div className="app-container">
				<header>
					<nav className='navbar navbar-expand-sm nav-pills' >
						<Link to='/' className='navbar-brand'
							onClick={() => this.setState({active: ''})}><h3>The Store</h3></Link>
						<Link 
							to='/signup' 
							className={this.isActive("signup")} 
							onClick={() => this.setState({active: 'signup'})} >Sign Up</Link>
						<Link 
							to='/login' 
							className={this.isActive('login')}
							onClick={() => this.setState({active: 'login'})}>Login</Link>
					</nav>
				</header>
				<div className="app-content">{this.props.children}</div>
				<footer>
					<p><Link to='/hello' > Footer </Link> </p>
				</footer>
			</div>
		);
	}
};

export default Layout;