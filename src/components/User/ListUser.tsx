import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { retrieveUsers } from "../../actions/User";

const ListUser = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.userReducer);

    useEffect(() => {
        dispatch(retrieveUsers());
    }, []);

    return (
        <>
            <h1>List User</h1>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ListUser;