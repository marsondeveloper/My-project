import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:  `https://social-network.samuraijs.com/api/1.0/`,
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
     follow(userId){
         return instance.delete(`follow/${userId}`)
     },
     unfollow(userId){
         return instance.post(`follow/${userId}`)
     }

};

export const profileAPI = {

    getProfile(userId) {

        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },


};


