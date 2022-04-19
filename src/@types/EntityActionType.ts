import { RETRIEVE_USERS } from "../actions/Types";
import { IUser } from "./IUser";

export interface retrieveUsersActionType {
    type: typeof RETRIEVE_USERS;
    payload: IUser[];
}


export type ActionType =
    | retrieveUsersActionType;