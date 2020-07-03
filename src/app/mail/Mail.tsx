import * as React from 'react';
import { MailPage } from './components';

import './mail.scss';
import { IMailProps, IMailState } from './IMail';

class Mail extends React.PureComponent<IMailProps, IMailState> {
  constructor(props: IMailProps) {
    super(props);
    props.fetchMails();
  }

  public render(): any {
    return (
      <MailPage />
    );
  }
}

export default Mail;
