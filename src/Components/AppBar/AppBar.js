import React from 'react'
import { connect } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import UserMenu from '../UserMenu/UserMenu'
import AuthNav from '../AuthNav/AuthNav'
import * as authSelectors from '../../Redux/auth/auth-selectors'
import styles from './AppBar.module.css'

const AppBar = ({ isAuth }) => (
    <header className={styles.header}>
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
)

const mapStateToProps = (state) => ({
    isAuth: authSelectors.getIsAuth(state),
})

export default connect(mapStateToProps)(AppBar)
