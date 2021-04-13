import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authOperations from '../../Redux/auth/auth-operations'

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.onLogin(this.state)

        this.setState({ name: '', email: '', password: '' })
    }

    render() {
        const { email, password } = this.state

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
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    onLogin: authOperations.login,
}

export default connect(null, mapDispatchToProps)(LoginView)
