import React from 'react';
import "./MyPosts.css"
import Post from './Post/Post';


const Myposts = (props) => {

  let newPostElement = React.createRef();

  let postsElements = props.posts.map( p => <Post messege={p.post} likesCount={p.likesCount} />)

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

    return (
        <div className="myposts">
          <h3>my posts</h3>
          <div>
            <div> <textarea ref={newPostElement}></textarea> </div>
            <div> <button onClick={ addPost }>Add post</button> </div>
          </div>
          <div className='posts'>
            { postsElements }
          </div>
        </div>
      )
};

export default Myposts;