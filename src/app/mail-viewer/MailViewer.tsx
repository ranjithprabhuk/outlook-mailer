import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { IMailViewerProps } from './IMailViewer';
import { NoMail, MailInfo, Reply } from './components';
import MailButtonGroup from './components/MailButtonGroup';

export const MailViewer: React.FC<IMailViewerProps> = (props: IMailViewerProps) => {
  const { selectedMail, toggleArchive, deleteMail } = props;
  return (
    <div className='col mail-viewer'>
      {selectedMail &&
        <div className='row'>
          <MailButtonGroup selectedMail={selectedMail} toggleArchive={toggleArchive} deleteMail={deleteMail} />
          <MailInfo selectedMail={selectedMail} />
          <div className='col-12 mail-body'>
            <ReactMarkdown source={selectedMail.content} />
            <Reply />
          </div>
        </div>
      }
      {!selectedMail && <NoMail />}
    </div>
  );
};
