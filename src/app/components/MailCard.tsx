import * as React from 'react';

export interface IMailCard {
    id?: string;
    sender: string;
    content: any;
    onClick?: any;
    className?: string;
}

const MailCard: React.SFC<IMailCard> = (props: IMailCard) => (
    <div className={`mail-card ${props.className}`} onClick={() => props.onClick()}>
        <h6 className='mail-title truncate'>{props.sender}</h6>
        <p className='mail-text truncate'>{props.content}</p>
    </div>
);

export default MailCard;
