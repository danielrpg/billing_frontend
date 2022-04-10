import { ActionType } from "../@types/EntityActionType";
import { RETRIEVE_USERS } from "../actions/Types";

function userReducer(state = {}, action: ActionType) {
    switch (action.type) {
        case RETRIEVE_USERS:
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;