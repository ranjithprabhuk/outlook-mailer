import * as React from 'react';
import { ILoginProps, ILoginState } from './ILogin';

class Home extends React.Component<ILoginProps, ILoginState> {
  public render(): React.ReactElement<Home> {

    return (
      <div className={'card col-4'}>
        Login Component
      </div>
    );
  }
}

export default Home;
