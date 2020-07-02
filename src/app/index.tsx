import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import AsyncComponent from '../utils/AsyncComponent';
import { IAppState } from '../Model';
import { ConnectedRouter } from 'react-router-redux';

const NoMatch = () => <h1 style={{ color: 'red' }}>Page not found!</h1>;
const login = () => import('./login');

class App extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props);
  }

  public render(): React.ReactElement<App> {
    const { store, history} = this.props;

    return (
      <ConnectedRouter store={store} history={history}>
        <div>
          <Switch>
            <Route exact path='/login' component={() => <AsyncComponent moduleProvider={login} />} />
            <Redirect exact from='/' to='login' />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

const outlookMailer: any = connect((state: IAppState) => ({
  ...state.routing,
}))(App);

export default outlookMailer;
