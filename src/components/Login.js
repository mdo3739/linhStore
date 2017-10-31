import React from 'react';

class Login extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}
	render() {
		return (
			<div className='col-md-3'>
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
						{this.state.email}
					</div>
				</div>

				<div className='form-group row'>
					<div className='col-md-4'>
						<label> Password </label>
					</div>
					<div className='col-md-8' >
						<input type='text' className='form-control' />
					</div>
				</div>
			</div>
		);
	}
}

export default Login;