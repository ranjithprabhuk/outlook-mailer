import * as React from 'react';
import { ILoginProps } from '../ILogin';
import LoginForm from './LoginForm';

import '../login.scss';

export const Login: React.FC<ILoginProps> = (props: ILoginProps) => {
    return (
      <div className='login-container'>
        <div className={'card col-md-4'}>
          <h4>LOGIN</h4>
          <LoginForm {...props} />
        </div>
      </div>
    );
};
