import * as React from 'react';
import { MailCard } from '../components';
import { ISideBarProps } from './ISideBar';
import { IMails } from '../mail/IMail';
import { MailCategory } from '../mail-header/IMailHeader';

const hasSearchText = (mail: IMails, searchText: string): boolean => {
  if (!searchText) {
    return true;
  }
  return mail.content.includes(searchText)
    || mail.subject.includes(searchText)
    || mail.sender.includes(searchText)
    || mail.from.includes(searchText);
};

const filterMails = (mails: IMails[], category: string, searchText: string): IMails[] => {
  if (category !== MailCategory.TOTAL) {
    return mails.filter((mail: any) => mail[`is${category}`] && hasSearchText(mail, searchText));
  }

  return mails.filter((mail: IMails) => !mail.isArchived && hasSearchText(mail, searchText));
};

export const SideBar: React.FC<ISideBarProps> = (props: ISideBarProps) => {
  const { selectedCategory, mails, updateSelectedMail, searchText, selectedMail } = props;
  const mailsToBeDisplayed = filterMails(mails, selectedCategory, searchText);

  return (
    <div className='col sidebar'>
      <div className='mails'>
        {mailsToBeDisplayed.map((mail: IMails) => (
          <MailCard
            key={mail.id}
            sender={mail.sender}
            content={mail.content}
            className={selectedMail && selectedMail.id === mail.id ? 'is-selected' : ''}
            onClick={() => updateSelectedMail(mail)}
          />))}
      </div>
    </div>
  );
};

