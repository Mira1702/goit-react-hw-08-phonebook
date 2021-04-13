import React from 'react';
import { connect } from 'react-redux';
import * as operations from '../Redux/operations';
import { getFilteredContacts } from '../Redux/selectors';

const ContactItem = ({ id, name, number, onRemove }) => {
    return (
        <li id={id}>
            <span>{name}</span>: <span>{number}</span>
            <button type="button" id={id} onClick={() => onRemove(id)}>
                Delete
            </button>
        </li>
    );
};

const Contacts = ({ contacts, onRemove }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        contacts: getFilteredContacts(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onRemove: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
