import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user);
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="login-form-right" >
							<input type="text"
								className="form-input"
								value={this.state.username}
								onChange={this.update("username")}
                placeholder="Username"/>
						<br/>
							<input type="password"
								className="form-input"
								value={this.state.password}
								onChange={this.update("password")}
                placeholder="Password"/>
						<br/>
						<input className="login-button" type="submit" value="Login" />
					</div>
				</form>
				{this.renderErrors()}
			</div>
		);
	}

}

export default withRouter(SessionForm);
