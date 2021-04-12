import React, { Component } from 'react';

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                </form>
            </div>
        );
    }
}

export default LoginView;
