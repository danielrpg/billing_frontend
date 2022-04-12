import { Dispatch } from "react";
import { ActionType } from "../@types/EntityActionType";
import { RETRIEVE_USERS } from "./Types";

export const retrieveUsers = () => async (dispatch: Dispatch<ActionType>) => {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/users")

        dispatch({
            type: RETRIEVE_USERS,
            payload: await result.json()
        })
    } catch (error) {
        console.log(error);
    }
}