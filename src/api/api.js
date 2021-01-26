import * as axios from "axios";
import u from "../redux/store";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "825e32c2-4021-4100-b008-e99e555e8f80"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}


// export const getUsers2 = (u) => {
//     return instance.delete(`follow/${u.id}`)
//
//         .then(response => response.data);
// }