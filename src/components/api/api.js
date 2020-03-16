import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "db02f66e-018c-4380-a0fa-817b8bb505bd"
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
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
};

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    },
    savePhoto(photoProfile) {
        const formData = new FormData();
        formData.append('bla', photoProfile);

        return instance.put(`profile/photo`, formData, {
            headers : {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

};




