import React, { Component } from 'react';
import './App.css';
import Container from '../Bootstrap/Container';
import Row from '../Bootstrap/Row';
import Col from '../Bootstrap/Col';
import UserForm from '../UserForm';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    users: []
  }

  handleInputChanged = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmitUser = (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      users
    } = this.state;

    if (!firstName && !lastName) {
      return;
    }

    const newUsers = [...users];
    const welcomeMessage = this.buildWelcomeMessage(firstName, lastName);
    newUsers.push({
      firstName,
      lastName,
      welcomeMessage
    });

    this.setState({
      firstName: '',
      lastName: '',
      users: newUsers
    });
  }

  buildWelcomeMessage = (firstName, lastName) => {
    let welcomeMessage;
    if (firstName) {
      welcomeMessage = `Welcome, ${firstName} `;
    }

    if (lastName) {
      if (!welcomeMessage) {
        welcomeMessage = 'Welcome, ';
      }
      welcomeMessage += lastName;
    }

    if (welcomeMessage) {
      welcomeMessage = welcomeMessage.trim() + '!';
    }

    return welcomeMessage;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size='lg-12'>
            <UserForm
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              handleInputChanged={this.handleInputChanged}
              handleSubmitUser={this.handleSubmitUser}
            />
          </Col>
        </Row>
        <Row>
          <Col size='lg-12'>
            <ul>
              {this.state.users.map((user) => (
                <li key={`${user.firstName}${user.lastName}`}>
                  {user.welcomeMessage}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
