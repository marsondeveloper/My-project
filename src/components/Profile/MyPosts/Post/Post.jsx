import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://thumbs-prod.si-cdn.com/_VhkN5w-2-OtQhT4Bq1EVIW55zg=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/20/d1/20d1d85c-6aa1-4cd9-94ff-8061f9a7baaa/avatar-therapy-early-trial-results-very-encouraging-20171123-600x600.jpg'/>
            {props.message}
            <div>
                <span>Like</span>
                {props.likesCounter}
            </div>
        </div>

    );
};

export default Post;