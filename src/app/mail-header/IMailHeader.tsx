import { IMailState } from '../mail/IMail';

interface IProps {
    updateSelectedCategory: any;
    updateSearchText: any;
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
