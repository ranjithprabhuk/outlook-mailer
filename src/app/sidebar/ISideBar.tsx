import { IMails } from '../mail/IMail';

export interface ISideBarProps {
    mails: IMails[];
    selectedCategory: string;
    updateSelectedMail: any;
}

export interface ISideBarState {
    selectedMail: IMails | null;
}
