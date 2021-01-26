import * as axios from "axios";
import u from "../redux/store";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "7108d58a-13ae-4435-b4b9-8d94d42fa96f"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
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


