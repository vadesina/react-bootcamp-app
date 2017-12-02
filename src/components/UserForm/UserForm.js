import React from 'react';
import PropTypes from 'prop-types';

const UserForm = ({
  firstName,
  lastName,
  handleInputChanged,
  handleSubmitUser
}) => (
  <form className="form-inline">
    <div className="form-group">
      <label htmlFor="firstName">First Name:</label>
      <input
        className="form-control"
        type="text"
        name="firstName"
        onChange={handleInputChanged}
        value={firstName}
      />
    </div>
    <div className="form-group">
      <label htmlFor="lastName">Last Name:</label>
      <input
        className="form-control"
        type="text"
        name="lastName"
        onChange={handleInputChanged}
        value={lastName}
      />
    </div>
    <div className="form-control">
      <button
        type="submit"
        className="btn btn-success"
        onClick={handleSubmitUser}
        disabled={(!firstName && !lastName)}
      >
        Add User
      </button>
    </div>
  </form>
);

UserForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  handleInputChanged: PropTypes.func.isRequired,
  handleSubmitUser: PropTypes.func.isRequired
};

export default UserForm;