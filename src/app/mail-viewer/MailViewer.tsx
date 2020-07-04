import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { IMailViewerProps } from './IMailViewer';
import { ButtonComponent, ImageThumbnail } from '../components';
import { NoMail } from './components';

export const MailViewer: React.FC<IMailViewerProps> = (props: IMailViewerProps) => {
  const { selectedMail, toggleArchive, deleteMail } = props;
  return (
    <div className='col mail-viewer'>
      {selectedMail &&
        <div className='row'>
          <div className='col-12 mail-buttons'>
            <ButtonComponent className='btn-sm' text='Reply' />
            <ButtonComponent
              className='btn-sm'
              text={selectedMail.isArchived ? 'UnArchive' : 'Archive'}
              onClick={() => toggleArchive(selectedMail)}
            />
            <ButtonComponent className='btn-sm btn-outline-danger' text='Delete' onClick={() => deleteMail(selectedMail)} />
          </div>
          <div className='col-12'>
            <div className='mail-user-thumbnail'>
              <ImageThumbnail
                width='60px'
                src={selectedMail.senderImageSrc}
                className='img-thumbnail'
                title=''
              />
            </div>
            <div className='mail-info'>
              <div>{selectedMail.date}</div>
              <div>{selectedMail.sender} ({selectedMail.from})</div>
              <div>Mail Subject</div>
            </div>
          </div>
          <div className='col-12 to-address'>
            To: {selectedMail.to}
          </div>
          <div className='col-12 mail-body'>
            <ReactMarkdown source={selectedMail.content} />
          </div>
        </div>
      }
      {!selectedMail && <NoMail />}
    </div>
  );
};
