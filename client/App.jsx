import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import api from './api';

export default class App extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <SignupForm userSignupRequest={api.userSignupRequest}/>
        </div>
      </section>
    );
  }
}
