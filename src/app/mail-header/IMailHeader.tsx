import { IMailState } from '../mail/IMail';
import { IUserState } from '../login';

interface IProps {
    updateSelectedCategory: any;
    updateSearchText: any;
    selectedCategory: string;
    logout: any;
    history: any;
    user: IUserState;
}

export type IMailHeaderProps = IMailState & IProps;

export interface IMailHeaderState {
    selectedCategory: string;
    searchText: string;
}

export enum MailCategory {
    NEW = 'New',
    ARCHIVED = 'Archived',
    TOTAL = 'Total',
}
