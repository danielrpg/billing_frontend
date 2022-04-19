import { Dispatch } from "react";
import { ActionType } from "../@types/EntityActionType";
import { IUser } from "../@types/IUser";
import UserService from "../services/Userservice";
import { RETRIEVE_USERS } from "./Types";

export const retrieveUsers = () => async (dispatch: Dispatch<ActionType>) => {
    try {
        const result = await UserService.getAllUsers();

        dispatch({
            type: RETRIEVE_USERS,
            payload: result.data
        })
    } catch (error) {
        console.log(error);
    }
}