export interface ILoginProps {
    validateUser: any;
}

export interface ILoginFormParams {
    username: string;
    password: string;
}

export interface IUserState {
    isLoggedIn: boolean;
    username: string;
    name: string;
    token: string;
}