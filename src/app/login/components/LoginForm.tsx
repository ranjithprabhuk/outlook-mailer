import * as React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { FormErrors } from 'redux-form';
import { ILoginProps, ILoginFormParams } from '../ILogin';
import { InputComponent } from '../../components';

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

const Login: React.FC<ILoginProps & InjectedFormProps<{}, ILoginProps>> = (props: ILoginProps) => {
  const { handleSubmit } = props;
  return (
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
