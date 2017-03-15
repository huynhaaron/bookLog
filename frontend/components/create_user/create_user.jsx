import React from 'react';
import { Link, withRouter } from 'react-router';

class CreateUser extends React.Component {
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
			<div >
				<form onSubmit={this.handleSubmit}>
					<h4>Not a user? Sign up now!</h4>
					{this.renderErrors()}
					<div>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
                placeholder="Username"/>
						<br/>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
                placeholder="Password"/>
						<br/>
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(CreateUser);
