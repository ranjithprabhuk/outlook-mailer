export interface IMailProps {
    fetchMails: any;
}

export interface IMailState {
    mails: IMails[];
    newMails?: IMails[];
    archivedMails?: IMails[];
}

export interface IMails {
    id: string;
    subject: string,
    date: string,
    from: string,
    to: string,
    sender: string,
    content: string
    isNew: boolean,
    isArchived: boolean
}
