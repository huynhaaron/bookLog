import React from 'react';
import { Link, withRouter } from 'react-router';

class CreateUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: { username: "", password: ""}, showErrors: false};
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
		return e => this.setState({user: {[field]: e.currentTarget.value}});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state.user;
		this.setState({showErrors: true});
		this.props.processForm(user);
	}

	renderErrors() {
		if (this.state.showErrors) {
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
	}

	render() {
		return (
			<div id="create-background" className="create-user-container">
				<form onSubmit={this.handleSubmit}>
					<div className="create-user-form">
						<p>Not a user? Sign up now!</p>
						{this.renderErrors()}
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
						<input className="create-button" type="submit" value="Join Now" />
					</div>
				</form>
			</div>

		);
	}

}

export default withRouter(CreateUser);
