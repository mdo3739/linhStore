import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	onSubmit(){
		axios.post('/api/user', {
			email: this.state.email,
			password: this.state.password
		})
		.then((res) => {
			console.log('SUCCESS');
		})
		.catch( err => {
			console.log(err);
		});
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
					</div>
				</div>

				<div className='form-group row'>
					<div className='col-md-4'>
						<label> Password </label>
					</div>
					<div className='col-md-8' >
						<input type='password' className='form-control' />
					</div>
				</div>
				<div className='form-group row'>
					<button className='btn btn-primary' onClick={this.onSubmit} >Submit</button>
				</div>
			</div>
		);
	}
}

export default Signup;