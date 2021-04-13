import axios from 'axios';
import * as actions from './actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContact = () => (dispatch) => {
    dispatch(actions.fetchContactRequest());
    axios
        .get('/contacts')
        .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
        .catch((error) => dispatch(actions.fetchContactError(error)));
};

export const addContact = (contact) => (dispatch) => {
    dispatch(actions.addContactRequest());
    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(actions.addContactSuccess(data)))
        .catch((error) => dispatch(actions.addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
    dispatch(actions.deleteContactRequest());
    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(actions.deleteContactSuccess(id)))
        .catch((error) => dispatch(actions.deleteContactError(error)));
};

// export const fetchContact = () => async (dispatch) => {
//     dispatch(actions.fetchContactRequest());

//     try {
//         const contacts = await contactsAPI.fetchContact();
//         dispatch(actions.fetchContactSuccess(contacts));
//     } catch (error) {
//         dispatch(actions.fetchContactError(error));
//     }
// };

// export const addContact = (contact) => async (dispatch) => {
//     dispatch(actions.addContactRequest());

//     try {
//         const contacts = await contactsAPI.addContact(contact);
//         dispatch(actions.addContactSuccess(contacts));
//     } catch (error) {
//         dispatch(actions.addContactError(error));
//     }
// };

// export const deleteContact = (contactId) => async (dispatch) => {
//     dispatch(actions.deleteContactRequest());

//     try {
//         const contacts = await contactsAPI.deleteContact(contactId);
//         dispatch(actions.deleteContactSuccess(contacts));
//     } catch (error) {
//         dispatch(actions.deleteContactError(error));
//     }
// };
