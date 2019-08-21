import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "7da9bcd7-ddc8-4b16-ad7e-d3e4f0d40013"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },


    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object');
        return profileAPI.getProfile(userId);
    }
};

export const authApi = {
    me(id, email, login) {
        return instance.get(`auth/me`);
    }
};

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/` + userId);
    },
    updateStatus(userId) {
        return instance.put(`status`);
    }

};




