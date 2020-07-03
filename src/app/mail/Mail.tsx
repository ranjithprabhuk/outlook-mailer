import * as React from 'react';
import { MailPage } from './components';

import './mail.scss';

class Mail extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): any {
    return (
      <MailPage />
    );
  }
}

export default Mail;
