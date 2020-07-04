export interface IAlertProps {
    alert: IAlertState;
    clearAlert: any;
}

export interface IAlertState {
    type: string;
    message: string;
}
