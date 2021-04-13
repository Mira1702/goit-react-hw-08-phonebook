import { connect } from 'react-redux'
import * as authSelectors from '../../Redux/auth/auth-selectors'
import * as authOperations from '../../Redux/auth/auth-operations'

const UserMenu = ({ email, onLogout }) => (
    <div>
        <p> Welcome, your email: {email}</p>
        <button type="button" onClick={onLogout}>
            Logout
        </button>
    </div>
)

const mapStateToProps = (state) => ({
    email: authSelectors.getUserEmail(state),
})

const mapDispatchToProps = {
    onLogout: authOperations.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
