import { IMails } from '../mail/IMail';

export interface IMailViewerProps {
    selectedMail: IMails | null;
    toggleArchive: any;
    deleteMail: any;
    toggleReply: any;
    sendMail: any;
}

export interface IMailViewerState {
    selectedMail: IMails | null;
}
