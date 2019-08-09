import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:  `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "cc6a776b-0281-4750-b50c-b1237be30b9c"
    }
});

 export const usersAPI = {
     getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}

};

export const profileAPI = {

    getProfile(userId) {

        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    }

};


