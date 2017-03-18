import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import classnames from 'classnames';
import TextFieldGroup from './common/TextFieldGroup';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state).then();
  }

  render() {
    const { username, password, passwordConfirm, errors, isLoading } = this.state;
    return (
      <div className="columns is-multiline" >
        <div className="column is-6 is-offset-3">
          <form onSubmit={this.onSubmit}>
            <TextFieldGroup
              field="username"
              label="Username / Email"
              type="email"
              value={username}
              error={errors.username}
              onChange={this.onChange}
              icon="fa-envelope"
            />
            <TextFieldGroup
              field="password"
              label="Password"
              type="password"
              value={password}
              error={errors.password}
              onChange={this.onChange}
              icon="fa-lock"
            />
            <TextFieldGroup
              field="passwordConfirm"
              label="Password Confirmation"
              type="password"
              value={passwordConfirm}
              error={errors.passwordConfirm}
              onChange={this.onChange}
              icon="fa-lock"
            />
            <p className="control">
              <button className={classnames('button', 'is-success', { 'is-loading': this.state.isLoading })}>
                Продолжить
              </button>
            </p>
          </form>
        </div>
        <div className="column is-6 is-offset-3">
          {<pre>{JSON.stringify(this.state, '', 4)}</pre>}
        </div>
      </div>
    );
  }
}


SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};
