import React from 'react';
import "./Post.css"


const Post = (props) => {
  return (
    <div>
      <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" />
      { props.messege }
      <div className='quantity'>
      { props.likesCount } Like
      </div>
    </div>

  )
};

export default Post;