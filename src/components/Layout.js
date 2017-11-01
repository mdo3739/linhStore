import React from 'react';
import {Link} from 'react-router-dom';
import Alert from 'react-alert';

class Layout extends React.Component {
	constructor(props){
		super(props);
		var alertOptions = {
			offset: 100,
			position: 'bottom left',
			theme: 'dark',
			time: 5000,
			transition: 'scale'
		};

		this.state = {active: ''};
	}

	isActive(button){
		if(button === this.state.active){
			return 'nav-link active';
		} else return 'nav-link';
	}

	

	showAlert(type, text) {
		this.msg.show(text, {
			type: type,
		})
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
					<Alert ref={a =>this.msg = a} {...this.alertOptions} />

					<button onClick={this.showAlert.bind(this, 'error', "Booyah")}>Show Alert</button>
				</footer>
			</div>
		);
	}
};

export default Layout;