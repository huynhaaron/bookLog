import React from 'react';
import { Link, withRouter } from 'react-router';

class CreateUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: ""};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demoSignIn = this.demoSignIn.bind(this);
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({[field]: e.currentTarget.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.clearErrors();
		const user = this.state;
		this.props.signup(user);
	}

	demoSignIn() {
		this.props.clearErrors();
		const user = {
			username: "demo",
			password: "password"
		};
		this.props.login(user);
	}

	render() {

		return (
		<div>
				<div className="create-user-container">
					<div className="create-user-form" >
						<p className="create-user-text">
							Keep a log of your books!
							<br/>

							Add books to shelves!
							<br/>
							Add reviews to books!
						</p>
						<form onSubmit={this.handleSubmit}>
							<div >
								<p>Not a user? Sign up now!</p>
									<input type="text"
										className="create-user-input"
										value={this.state.username}
										onChange={this.update("username")}
		                placeholder="Username"/>
								<br/>
									<input type="password"
										className="create-user-input"
										value={this.state.password}
										onChange={this.update("password")}
		                placeholder="Password"/>
								<br/>
								<input className="create-button" type="submit" value="Join Now" />
								</div>
						</form>
						<button className="demo-button" onClick={this.demoSignIn} >Demo</button>
					</div>
				</div>
			</div>

		);
	}

}

export default withRouter(CreateUser);
