import * as React from 'react';
import { ILoginProps } from './ILogin';
import { LoginForm } from './components';

import './login.scss';
import { Redirect } from 'react-router-dom';

export const Login: React.FC<ILoginProps> = (props: ILoginProps) => {
  if (props.state.user.token) {
    return (
      <Redirect to='mail' />
    );
  }
  return (
    <div className='login-container'>
      <div className={'card col-md-4'}>
        <h4 className={'text-primary'}>LOGIN</h4>
        <LoginForm {...props} />
      </div>
    </div>
  );
};
