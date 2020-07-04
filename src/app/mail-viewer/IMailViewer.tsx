import { IMails } from '../mail/IMail';

export interface IMailViewerProps {
    selectedMail: IMails | null;
    toggleArchive: any;
    deleteMail: any;
}

export interface IMailViewerState {
    selectedMail: IMails | null;
}
