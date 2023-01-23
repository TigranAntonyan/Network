import React from 'react';
import Myposts from './MyPosts/MyPosts';
import Profileinfo from './ProfileInfo/ProfileInfo';
import "./Profile.css"


const Profile = (props) => {
  return (
      <div className="profile">
        <Profileinfo />
        <Myposts posts={props.posts} addPost={props.addPost}/>
      </div>
    )
};

export default Profile;