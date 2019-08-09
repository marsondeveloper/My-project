import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Profile from "../../../App";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCount} key={p.id}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostChange(text);

    };
    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;