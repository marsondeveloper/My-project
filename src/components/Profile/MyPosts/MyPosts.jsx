import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCount} key={p.id}/>)
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);

    };

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My post</h3>
            </div>
            <div>
                <AddNewPostRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText"/>
            </div>
            <div>
                <button>Add posts</button>
            </div>
        </form>
    )
};

const AddNewPostRedux = reduxForm({form: "ProfileAddNewPostForm"})(addNewPostForm);

export default MyPosts;