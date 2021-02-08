import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "5d03c47e-0a10-40e8-88e8-ce7a499765ba"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data);
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}


