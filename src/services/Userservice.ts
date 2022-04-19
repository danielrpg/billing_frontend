import http from './http-common';

const getAllUsers = (): any => {
    return http.get('https://jsonplaceholder.typicode.com/users');
}

const removeUser = (id: number) => {
    return http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
}

const UserService = {
    getAllUsers,
    //deleteUser: removeUser,
}

export default UserService;