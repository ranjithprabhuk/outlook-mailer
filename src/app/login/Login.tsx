import * as React from 'react';
import { ILoginProps, ILoginFormParams } from './ILogin';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormErrors } from 'redux-form';
import { InputComponent } from '../components';

import './login.scss';

const validate = (values: ILoginFormParams): FormErrors<ILoginFormParams> => {
  const errors: FormErrors<ILoginFormParams> = {};

  if (!values.username) {
    errors.username = 'User name is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export const Login: React.FC<ILoginProps & InjectedFormProps<{}, ILoginProps>> = (props: ILoginProps) => {
    const { handleSubmit } = props;
    return (
      <div className='login-container'>
        <div className={'card col-md-4'}>
          <h4>LOGIN</h4>
          <form onSubmit={handleSubmit} noValidate={true}>
            <Field
              name='username'
              type='text'
              component={InputComponent}
              label='Name *'
              placeHolder='Username'
            />
            <Field
              name='password'
              type='password'
              component={InputComponent}
              label='Name *'
              placeHolder='Password'
            />
            <div className='form-group'>
              <button type='submit' className='btn btn-primary btn-block btn-lg'>
                Login
            </button>
            </div>
          </form>
        </div>
      </div>
    );
}

const LoginForm = reduxForm<{}, ILoginProps>({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  form: 'user',
  touchOnChange: true,
  validate,
})(Login);

export default connect(null)(LoginForm);
