import * as React from 'react';
import { ButtonComponent } from '../../components';
import { IMails } from '../../mail/IMail';

export interface IMailButtonGroup {
    selectedMail: IMails;
    toggleArchive: any;
    deleteMail: any;
    toggleReply: any;
    sendMail: any;
}

const MailButtonGroup: React.SFC<IMailButtonGroup> = (props: IMailButtonGroup) => {
    const { selectedMail, toggleArchive, deleteMail, toggleReply, sendMail } = props;
    return (
        <div className='col-12 mail-buttons'>
            {!selectedMail.isReply && <div>
                <ButtonComponent className='btn-sm' text='Reply' onClick={() => toggleReply(selectedMail)} />
                <ButtonComponent
                    className='btn-sm'
                    text={selectedMail.isArchived ? 'UnArchive' : 'Archive'}
                    onClick={() => toggleArchive(selectedMail)}
                />
                <ButtonComponent className='btn-sm btn-outline-danger' text='Delete' onClick={() => deleteMail(selectedMail)} />
            </div>}
            {selectedMail.isReply && <div>
                <ButtonComponent className='btn-sm' text='Send' onClick={() => sendMail(selectedMail)} />
                <ButtonComponent className='btn-sm btn-outline-danger' text='Cancel' onClick={() => toggleReply(selectedMail)} />
            </div>}
        </div>
    );
};

export default MailButtonGroup;
