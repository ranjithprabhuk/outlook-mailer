import * as React from 'react';
import { ImageThumbnail } from '../../components';
import { IMails } from '../../mail/IMail';

export interface IMailInfo {
    selectedMail: IMails;
}

const MailInfo: React.SFC<IMailInfo> = (props: IMailInfo) => {
    const { selectedMail } = props;
    return (
        <div>
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
                    <div>Mail Subject: {selectedMail.subject}</div>
                </div>
            </div>
            <div className='col-12 to-address'>
                To: {selectedMail.to}
            </div>
        </div>
    );
};

export default MailInfo;
