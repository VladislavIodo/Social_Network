import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "edcc309f-176f-4595-ab6c-ed45f1b1f038"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
     unfollow(userId)  {
        return instance.delete(`follow/${userId}`)

            .then(response => response.data);
    },
    follow(userId)  {
        return instance.post(`follow/${userId}`, {})

            .then(response => response.data);
    }
}


