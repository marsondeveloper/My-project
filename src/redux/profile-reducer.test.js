import profileReducer, {deletePost} from "./profile-reducer";
import React from "react";
import {addPostActionCreator} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 18},
        {id: 3, message: 'What is your name?', likesCount: 14},
        {id: 4, message: 'I love girls', likesCount: 12},
        {id: 5, message: 'YO!', likesCount: 12}
    ],

};


it('length of posts should be incremented', () => {
    // 1. Готовим исходные данные для тестирования
    let action = addPostActionCreator("it-kamasutra.com");

    //2. Делаем какой-то Action
    let newState = profileReducer(state, action);
    //3. Expectation(ожидание), проверяем завершилось действие правильно или не правильно
    expect(newState.posts.length).toBe(6);

});


it('message of newPosts should be correct', () => {
    // 1. Готовим исходные данные для тестирования
    let action = addPostActionCreator("it-kamasutra.com");

    //2. Делаем какой-то Action
    let newState = profileReducer(state,action);
    //3. Expectation(ожидание), проверяем завершилось действие правильно или не правильно

    expect(newState.posts[5].message).toBe("it-kamasutra.com");
});


it('after deleting length of messages should be decrement', () => {
    // 1. Готовим исходные данные для тестирования
    let action = deletePost(1);

    //2. Делаем какой-то Action
    let newState = profileReducer(state,action);
    //3. Expectation(ожидание), проверяем завершилось действие правильно или не правильно

    expect(newState.posts.length).toBe(4);
});