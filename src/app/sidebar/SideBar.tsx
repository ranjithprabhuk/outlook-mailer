import * as React from 'react';
import { MailCard } from '../components';
import { ISideBarProps } from './ISideBar';

export const SideBar: React.FC<ISideBarProps> = (props: ISideBarProps) => {
  return (
    <div className='col-2 sidebar'>
      <div className='mails'>
        <MailCard
          sender='Ranjithprabhu Kumar'
          content='Some quick example text to build some dummy text'
        />
        <MailCard
          sender='Ranjithprabhu Kumar'
          content='Some quick example text to build some dummy text'
        />
        <MailCard
          sender='Ranjithprabhu Kumar'
          content='Some quick example text to build some dummy text'
        />
      </div>
    </div>
  );
};
