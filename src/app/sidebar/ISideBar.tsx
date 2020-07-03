import { IMailCard } from '../components/MailCard';

export interface ISideBarProps {
    mails: IMailCard[];
}

export interface ISideBarState {
    selectedMail: string;
}
