import { USER_REQUEST } from "../actions/Types";
import { IUser } from "./IUserState";

export interface retrieveUsersActionType {
    type: typeof USER_REQUEST;
    payload?: IUser[];
}


export type ActionType =
    | retrieveUsersActionType;