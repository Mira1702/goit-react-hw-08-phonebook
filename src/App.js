import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhoneBook from './Components/Phonebook';
// import Contacts from './Components/Contacts';
// import Filter from './Components/Filter';
import HomeView from './Components/HomeView';
import RegisterView from './Components/RegisterView';
import LoginView from './Components/Login';
import { connect } from 'react-redux';
import { fetchContact } from './Redux/operations';

function App() {
    return (
        <>
            {/* <h1>Phonebook</h1>
            <PhoneBook />
            <h2>Contacts</h2>
            <Filter />
            <Contacts /> */}
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/register" component={RegisterView} />
                <Route path="/login" component={LoginView} />
                {/* <Route path="/contacts" component={PhoneBook} /> */}
            </Switch>
        </>
    );
}

// const mapStateToProps = ({ contacts: { items } }) => ({
//     contacts: items,
// });

const mapDispatchToProps = (dispatch) => ({
    fetchContact: () => dispatch(fetchContact()),
});

export default connect(null, mapDispatchToProps)(App);
