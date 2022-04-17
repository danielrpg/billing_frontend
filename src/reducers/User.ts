import { ActionType } from "../@types/EntityActionType";
import { IUser } from "../@types/IUser";
import { RETRIEVE_USERS } from "../actions/Types";

const initialState: IUser[] = [];

function userReducer(state = initialState, action: ActionType): IUser[] {
    switch (action.type) {
        case RETRIEVE_USERS:
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;