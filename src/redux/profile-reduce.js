const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {

    posts: [
        {id: 1, message: 'Hello!', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 18},
        {id: 3, message: 'What is yuor name?', likesCount: 14},
        {id: 4, message: 'I love girls', likesCount: 12},
        {id: 5, message: 'YO!', likesCount: 12}
    ],
    newPostText: 'I developer Marlen!',
    profile: null
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {    //меняет state
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {     //меняется только текст в текущий момент времени
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile}

        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
