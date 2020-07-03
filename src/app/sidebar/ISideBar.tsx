import { IMails } from '../mail/IMail';

export interface ISideBarProps {
    mails: IMails[];
    selectedCategory: string;
}

export interface ISideBarState {
    selectedMail: string;
}
