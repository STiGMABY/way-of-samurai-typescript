import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1395fcf2-9369-4c85-86f6-e7d2933a85b4'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
    },

    getMainContent(userId: number){
        console.warn('Outdated method, Pls use MainContentAPI object')
        return MainContentAPI.getMainContent(userId)
    }
}

export const MainContentAPI = {
    getMainContent(userId: number){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: JSON){
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

