import * as React from 'react';

interface IAsyncComponentOwnProps {
  moduleProvider: any;
}

interface IAsyncComponentState {
  Component: any;
}

interface IAsyncComponentStateProps {
}

type IAsyncComponentProps = IAsyncComponentOwnProps & IAsyncComponentStateProps;

class AsyncComponent extends React.PureComponent<IAsyncComponentProps, IAsyncComponentState> {
  constructor(props: IAsyncComponentProps) {
    super(props);
    this.state = {
      Component: null,
    };
  }

  public componentWillMount(): void {
    if (!this.state.Component) {
        this.props.moduleProvider().then((data: any) => this.setState({ Component: data.default }));
    }
  }

  public renderLoader(): React.ReactElement<any> {
    return (
      <div>Component Loading Inprogress</div>
    );
  }

  public render(): React.ReactElement<any> {
    const { Component } = this.state;
    return Component ? <Component /> : this.renderLoader();
  }
}

export default AsyncComponent;
