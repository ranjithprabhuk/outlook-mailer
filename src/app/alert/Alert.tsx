import * as React from 'react';
import { IAlertProps } from './IALert';

import './alert.scss';

export const Alert: React.FC<IAlertProps> = (props: IAlertProps) => {
  const { alert: { type, message }, clearAlert } = props;
  if (!type || !message) {
    return (<span />);
  }
  return (
    <div className={`alert alert-${type} fade show`}>
      {message} <button type='button' className='close' onClick={() => clearAlert()}><span>&times;</span></button>
    </div>
  );
};

