import * as React from 'react';
import { ButtonComponent, ImageThumbnail } from '../components';
import { IMailHeaderProps } from './IMailHeader';

export const MailHeader: React.FC<IMailHeaderProps> = (props: IMailHeaderProps) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='collapse navbar-collapse justify-content-between'>
        <ul className='navbar-nav mr-auto'>
          <ButtonComponent text='New' value={5} />
          <ButtonComponent text='Archived' value={10} />
          <ButtonComponent text='Total' value={15} />
        </ul>
        <ul className='navbar-nav'>
          <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
          <ImageThumbnail src='./assets/images/ranjithprabhu.jpg' title='' />
          <ButtonComponent className='btn btn-outline-danger' text='Logout' />
        </ul>
      </div>
    </nav>
  );
};
