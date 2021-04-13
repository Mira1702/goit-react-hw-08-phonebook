import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import * as actions from '../Redux/actions';
import { getFilter } from '../Redux/selectors';

const nameInputId = shortid.generate();

const Filter = ({ value, onChange }) => {
    return (
        <div>
            <h3>Find contacts by name</h3>
            <input
                type="text"
                placeholder="Search contact"
                name="filter"
                value={value}
                onChange={onChange}
                id={nameInputId}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        value: getFilter(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onChange: (event) => dispatch(actions.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
