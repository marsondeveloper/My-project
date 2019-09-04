import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 =  maxLengthCreator(10);


const MyPosts = React.memo(props => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCount}
                                                   key={p.id}/>)
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
});

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText"
                       validate={[required, maxLength10]} placeholder={"Post message"}/>
            </div>
            <div>
                <button>Add posts</button>
            </div>
        </form>
    )
};

const AddNewPostRedux = reduxForm({form: "ProfileAddNewPostForm"})(addNewPostForm);

export default MyPosts;