import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { IMailViewerProps } from './IMailViewer';
import { ButtonComponent, ImageThumbnail } from '../components';

const markdown = '# This is a H1  \n## This is a H2  \n###### This is a H6';
export const MailViewer: React.FC<IMailViewerProps> = (props: IMailViewerProps) => {
  return (
    <div className='col-10 mail-viewer'>
      <div className='row'>
        <div className='col-12 mail-buttons'>
          <ButtonComponent text='Reply' />
          <ButtonComponent text='Archive' />
          <ButtonComponent className='btn btn-outline-danger' text='Delete' />
        </div>
        <div className='col-12'>
          <div className='mail-user-thumbnail'>
            <ImageThumbnail
              width='60px'
              src='./assets/images/ranjithprabhu.jpg'
              className='img-thumbnail'
              title=''
            />
          </div>
          <div className='mail-info'>
            <div>Fri 7/3/2020 12:30 PM</div>
            <div>Ranjithprabhu Kumar (rkumar@rockinterview.in)</div>
            <div>Mail Subject</div>
          </div>
        </div>
        <div className='col-12 to-address'>
          To: Toaddddresss@rockinterview.in
              </div>
        <div className='col-12 mail-body'>
          <ReactMarkdown source={markdown} />
        </div>
      </div>
    </div>
  );
};
