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

const Login: React.FC<ILoginProps & InjectedFormProps<{}, ILoginProps>> = (props: any) => {
  const { validateUser, state: { form } } = props;
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    validateUser(form.user.values);
    props.reset();
  };

  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      <Field
        name='username'
        type='text'
        component={InputComponent}
        label='Username:'
        placeHolder='Username'
      />
      <Field
        name='password'
        type='password'
        component={InputComponent}
        label='Password:'
        placeHolder='Password'
      />
      <div className='form-group'>
        <button
          type='submit'
          className='btn btn-primary btn-block btn-lg'
          disabled={!props.valid || props.submitting}
        >
          Login
        </button>
      </div>
    </form>
  );
};

const LoginForm = reduxForm<{}, ILoginProps>({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  form: 'user',
  touchOnChange: true,
  validate,
})(Login);

export default connect(null)(LoginForm);
