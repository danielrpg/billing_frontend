import { ActionType } from "../@types/EntityActionType";
import { IUserState } from "../@types/IUserState";
import { USER_REQUEST, USER_RESPONSE_FAILED, USER_RESPONSE_SUCCESS } from "../actions/Types";

const initialState: IUserState = {} as IUserState;

function userReducer(state = initialState, action: ActionType): IUserState {
    switch (action.type) {
        case USER_REQUEST:
            return { ...state, isFetching: true, isFailed: false, result: [] };
        case USER_RESPONSE_SUCCESS:
            return { ...state, isFetching: false, isFailed: false, result: action.payload };
        case USER_RESPONSE_FAILED:
            return { ...state, isFetching: false, isFailed: true, result: [] };
        default:
            return state;
    }
}

export default userReducer;