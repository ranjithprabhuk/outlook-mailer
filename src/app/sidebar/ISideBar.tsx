import { IMails } from '../mail/IMail';

export interface ISideBarProps {
    mails: IMails[];
    selectedCategory: string;
    searchText: string;
    updateSelectedMail: any;
}

export interface ISideBarState {
    selectedMail: IMails | null;
}
