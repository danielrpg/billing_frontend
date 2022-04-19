export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface IUserState {
    isFetching: boolean;
    isFailed: boolean;
    result?: IUser[];
}