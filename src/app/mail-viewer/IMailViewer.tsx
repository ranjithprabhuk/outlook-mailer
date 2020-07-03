import { IMails } from '../mail/IMail';

export interface IMailViewerProps {
    selectedMail: IMails | null;
}

export interface IMailViewerState {
    selectedMail: IMails | null;
}
