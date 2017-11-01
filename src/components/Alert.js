import React from 'react';
import axios from 'axios';
import AlertContainer from 'react-alert';

class Alert extends React.Component{
	constructor(props){
		super(props);
		var alertOptions = {
			offset: 100,
			position: 'bottom right',
			theme: 'dark',
			time: 5000,
			transition: 'scale'
		};
		this.state = {
			email: '',
			password: ''
		};
	}

	showAlert(type, text) {
		this.msg.show(text, {
			type: type,
		})
	}

	render(){
		return (
			<div>
				<AlertContainer ref={a =>this.msg = a} {...this.alertOptions} />
				<button onClick={this.showAlert.bind(this, this.props.type, this.props.message)}>Bang</button>
			</div>
		);
	}
}

export default Alert;