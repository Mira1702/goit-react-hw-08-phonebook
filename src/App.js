import React from 'react';
import PhoneBook from './Components/Phonebook';
import Contacts from './Components/Contacts';
import Filter from './Components/Filter';
import { connect } from 'react-redux';
import { fetchContact } from './Redux/operations';

function App() {
    return (
        <>
            <h1>Phonebook</h1>
            <PhoneBook />
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
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
