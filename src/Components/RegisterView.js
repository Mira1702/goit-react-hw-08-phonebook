import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../Redux/auth/auth-operations';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onRegister(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <div>
                <h1>Register Page</h1>
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
                    <label>
                        Name
                        <input
                            type="name"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onRegister: (data) => dispatch(authOperations.register(data)),
});

// const mapDispatchToProps = {
//     onSubmit: authOperations.register,
// };

export default connect(null, mapDispatchToProps)(RegisterView);
