import * as React from 'react';
import { ButtonComponent, ImageThumbnail } from '../components';
import { IMailHeaderProps, MailCategory } from './IMailHeader';

export const MailHeader: React.FC<IMailHeaderProps> = (props: IMailHeaderProps) => {
  const { mails, archivedMails, newMails, updateSelectedCategory, updateSearchText } = props;
  const { NEW, ARCHIVED, TOTAL } = MailCategory;
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='collapse navbar-collapse justify-content-between'>
        <ul className='navbar-nav mr-auto'>
          {newMails
            && <ButtonComponent text={NEW} value={newMails.length} onClick={() => updateSelectedCategory(NEW)} />}
          {archivedMails
            && <ButtonComponent text={ARCHIVED} value={archivedMails.length} onClick={() => updateSelectedCategory(ARCHIVED)} />}
          {archivedMails
            && <ButtonComponent text={TOTAL} value={mails.length - archivedMails.length} onClick={() => updateSelectedCategory(TOTAL)} />}
        </ul>
        <ul className='navbar-nav'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            onChange={(e) => updateSearchText(e.target.value)}
          />
          <ImageThumbnail src='./assets/images/ranjithprabhu.jpg' title='' />
          <ButtonComponent className='btn btn-outline-danger' text='Logout' />
        </ul>
      </div>
    </nav>
  );
};
