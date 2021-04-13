import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import PhoneBook from './Components/Phonebook'
// import Contacts from './Components/Contacts';
// import Filter from './Components/Filter';
import HomeView from './Components/HomeView/HomeView'
import RegisterView from './Components/RegisterView/RegisterView'
import LoginView from './Components/Login/Login'
import AppBar from './Components/AppBar/AppBar'
import { connect } from 'react-redux'
import { fetchContact } from './Redux/contacts/operations'

function App() {
    return (
        <>
            <AppBar />

            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/register" component={RegisterView} />
                <Route path="/login" component={LoginView} />
                {/* <Route path="/contacts" component={PhoneBook} /> */}
            </Switch>
        </>
    )
}

// const mapStateToProps = ({ contacts: { items } }) => ({
//     contacts: items,
// });

const mapDispatchToProps = (dispatch) => ({
    fetchContact: () => dispatch(fetchContact()),
})

export default connect(null, mapDispatchToProps)(App)
