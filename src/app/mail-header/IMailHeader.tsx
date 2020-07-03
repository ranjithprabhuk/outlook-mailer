import { IMailState } from '../mail/IMail';

interface IProps {
    updateSelectedCategory: any;
}

export type IMailHeaderProps = IMailState & IProps;

export interface IMailHeaderState {
    selectedCategory: string;
}

export enum MailCategory {
    NEW = 'New',
    ARCHIVED = 'Archived',
    TOTAL = 'Total',
}
