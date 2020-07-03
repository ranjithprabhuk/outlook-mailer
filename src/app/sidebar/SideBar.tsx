import * as React from 'react';
import { MailCard } from '../components';
import { ISideBarProps } from './ISideBar';
import { IMails } from '../mail/IMail';
import { MailCategory } from '../mail-header/IMailHeader';

export const SideBar: React.FC<ISideBarProps> = (props: ISideBarProps) => {
  const { selectedCategory, mails } = props;
  const mailsToBeDisplayed = filterMails(mails, selectedCategory);
  return (
    <div className='col-2 sidebar'>
      <div className='mails'>
        {mailsToBeDisplayed.map((mail: IMails) =>
          (<MailCard key={mail.id} sender={mail.sender} content={mail.content} />))}
      </div>
    </div>
  );
};

const filterMails = (mails: IMails[], category: string): IMails[] => {
  if (category !== MailCategory.TOTAL) {
    return mails.filter((mail: any) => mail[`is${category}`]);
  }

  return mails;
};
