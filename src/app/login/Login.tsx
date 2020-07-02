import * as React from 'react';
import { ILoginProps, ILoginState } from './ILogin';

import './login.scss';

class Home extends React.Component<ILoginProps, ILoginState> {
  public render(): React.ReactElement<Home> {

    return (
      <div className="login-container">
        <div className={'card col-4'}>
          <h4>LOGIN</h4>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" required />
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-primary btn-block btn-lg">
                Login
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
