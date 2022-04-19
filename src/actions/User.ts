import { Dispatch } from "react";
import { ActionType } from "../@types/EntityActionType";
import UserService from "../services/Userservice";
import { USER_REQUEST, USER_RESPONSE_SUCCESS, USER_RESPONSE_FAILED } from "./Types";

export const retrieveUsers = () => async (dispatch: Dispatch<ActionType>) => {
    try {

        dispatch({
            type: USER_REQUEST
        });

        const result = await UserService.getAllUsers();

        if (result.status === 200) {
            dispatch({
                type: USER_RESPONSE_SUCCESS,
                payload: result.data
            })
        } else {
            dispatch({
                type: USER_RESPONSE_FAILED
            })
        }
    } catch (error) {
        dispatch({
            type: USER_RESPONSE_FAILED
        })
    }
}