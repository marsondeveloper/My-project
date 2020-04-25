import {authApi as authAPI, securityApi} from "../components/api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GER_CAPTCHA_URL_SUCCESS = 'GER_CAPTCHA_URL_SUCCESS';


let initialState = {

    userId: 'null',
    email: 'null',
    login: 'null',
    isAuth: false,
    captchaUrl: null

};


const authReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USER_DATA:
         case GER_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
   type: SET_USER_DATA,
   payload: {captchaUrl}
});

export const getAuthUserData = (id, email, login) => async (dispatch) => {

    let response = await authAPI.me(id, email, login);
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
    };

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {

        let response = await authAPI.login(email, password, rememberMe, captcha);

            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                if(response.data.resultCode === 10){
                    dispatch(getCaptchaUrl())
                }
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error:  message}));
            }
};

export const logout = () => async (dispatch) => {
       const response = await authAPI.logout();

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))

};

export default authReducer;
