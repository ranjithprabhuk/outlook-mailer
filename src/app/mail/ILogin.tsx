export interface ILoginProps {
    validateUser: any;
}

export interface ILoginFormParams {
    username: string;
    password: string;
}

export interface IUserState {
    username: string;
    name: string;
    token: string;
}
