export interface ILoginProps {
    validateUser: any;
    state: any;
}

export interface ILoginFormParams {
    username: string;
    password: string;
}

export interface IUserState {
    username: string;
    name: string;
    token: string;
    userImage: string;
}
