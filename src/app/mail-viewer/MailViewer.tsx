import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { IMailViewerProps } from './IMailViewer';
import { ButtonComponent } from '../components';
import { NoMail, MailInfo } from './components';

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
          <MailInfo selectedMail={selectedMail} />
          <div className='col-12 mail-body'>
            <ReactMarkdown source={selectedMail.content} />
            <div className='mail-reply'>
              <hr />
              <textarea className='form-control' rows={10}></textarea>
            </div>
          </div>
        </div>
      }
      {!selectedMail && <NoMail />}
    </div>
  );
};
