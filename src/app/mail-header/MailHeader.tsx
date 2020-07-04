import * as React from 'react';
import { ButtonComponent, ImageThumbnail } from '../components';
import { IMailHeaderProps, MailCategory } from './IMailHeader';
import { withRouter } from 'react-router-dom';

const MailHeader: React.FC<IMailHeaderProps> = (props: IMailHeaderProps) => {
  const { mails, archivedMails, newMails, updateSelectedCategory, updateSearchText, selectedCategory, logout, history, user } = props;
  const { NEW, ARCHIVED, TOTAL } = MailCategory;
  const logoutUser = () => {
    history.push('/login');
    logout();
  };
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='collapse navbar-collapse justify-content-between'>
        <ul className='navbar-nav mr-auto'>
          {newMails &&
            <ButtonComponent
              className={selectedCategory === NEW ? 'btn-primary text-white' : ''}
              text={NEW}
              value={newMails.length}
              onClick={() => updateSelectedCategory(NEW)}
            />}
          {archivedMails &&
            <ButtonComponent
              className={selectedCategory === ARCHIVED ? 'btn-primary text-white' : ''}
              text={ARCHIVED}
              value={archivedMails.length}
              onClick={() => updateSelectedCategory(ARCHIVED)}
            />}
          {archivedMails &&
            <ButtonComponent
              className={selectedCategory === TOTAL ? 'btn-primary text-white' : ''}
              text={TOTAL}
              value={mails.length - archivedMails.length}
              onClick={() => updateSelectedCategory(TOTAL)}
            />}
        </ul>
        <ul className='navbar-nav'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            onChange={(e) => updateSearchText(e.target.value)}
          />
          <ImageThumbnail src={user.userImage} title={user.name} />
          <ButtonComponent className='btn-outline-danger' text='Logout' onClick={() => logoutUser()} />
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(MailHeader as any);
