import * as React from 'react';

export interface IMailCard {
    sender: string;
    content: any;
}

const MailCard: React.SFC<IMailCard> = (props: IMailCard) => (
    <div className='mail-card'>
        <h6 className='mail-title truncate'>{props.sender}</h6>
        <p className='mail-text truncate'>{props.content}</p>
    </div>
);

export default MailCard;
