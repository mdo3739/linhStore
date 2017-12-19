import React from 'react';
import axios from 'axios';

class Login extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	onSubmit(){
		axios.post('/api/user/login', {
			email: this.state.email.toUpperCase(),
			password: this.state.password
		})
		.then( res => {
			console.log(res.data);
		})
		.catch( err => {
			console.log(err);
		});
	}

	render() {
		return (
			<div className='col-md-3'>
				<form>
					<div className='form-group row'>
					
						<div className='col-md-4'>
							<label>Email: </label>
						</div>
						<div className='col-md-8' >
							<input 
								type='text' 
								className='form-control' 
								value={this.state.email}
								onChange={event => this.setState({email: event.target.value})} />
						</div>
					</div>

					<div className='form-group row'>
						<div className='col-md-4'>
							<label> Password </label>
						</div>
						<div className='col-md-8' >
							<input type='password' 
							className='form-control'
							value={this.state.password}
							onChange={event => this.setState({password: event.target.value})} />
						</div>
					</div>
					<div className='form-group row'>
						<button className='btn btn-primary' onClick={this.onSubmit.bind(this)} >Log In</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;