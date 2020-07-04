import * as React from 'react';
import { ButtonComponent } from '../../components';
import { IMails } from '../../mail/IMail';

export interface IMailButtonGroup {
    selectedMail: IMails;
    toggleArchive: any;
    deleteMail: any;
}

const MailButtonGroup: React.SFC<IMailButtonGroup> = (props: IMailButtonGroup) => {
    const { selectedMail, toggleArchive, deleteMail } = props;
    return (
        <div className='col-12 mail-buttons'>
            <ButtonComponent className='btn-sm' text='Reply' />
            <ButtonComponent
                className='btn-sm'
                text={selectedMail.isArchived ? 'UnArchive' : 'Archive'}
                onClick={() => toggleArchive(selectedMail)}
            />
            <ButtonComponent className='btn-sm btn-outline-danger' text='Delete' onClick={() => deleteMail(selectedMail)} />
        </div>
    )
};

export default MailButtonGroup;
