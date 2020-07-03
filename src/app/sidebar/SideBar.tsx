import * as React from 'react';
import { MailCard } from '../components';
import { ISideBarProps } from './ISideBar';
import { IMailCard } from '../components/MailCard';

export const SideBar: React.FC<ISideBarProps> = (props: ISideBarProps) => {
  return (
    <div className='col-2 sidebar'>
      <div className='mails'>
        {props.mails.map((mail: IMailCard) =>
          (<MailCard key={mail.id} sender={mail.sender} content={mail.content} />))}
      </div>
    </div>
  );
};
