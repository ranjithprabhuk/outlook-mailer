import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { IMailViewerProps } from './IMailViewer';
import { NoMail, MailInfo, Reply, MailButtonGroup } from './components';

export const MailViewer: React.FC<IMailViewerProps> = (props: IMailViewerProps) => {
  const { selectedMail, toggleArchive, deleteMail, toggleReply, sendMail } = props;
  return (
    <div className='col mail-viewer'>
      {selectedMail &&
        <div className='row'>
          <MailButtonGroup
            selectedMail={selectedMail}
            toggleArchive={toggleArchive}
            toggleReply={toggleReply}
            deleteMail={deleteMail}
            sendMail={sendMail}
          />
          <MailInfo selectedMail={selectedMail} />
          <div className='col-12 mail-body'>
            <ReactMarkdown source={selectedMail.content} />
            {selectedMail.isReply && <Reply />}
          </div>
        </div>
      }
      {!selectedMail && <NoMail />}
    </div>
  );
};
