let state = {
    profilePage: {
        posts: [
            {id:1, post:"Hi, How are you?", likesCount:33},
            {id:2, post:"It's my first post", likesCount:999},
            {id:1, post:"Hi", likesCount:800},
            {id:2, post:"first post", likesCount:99}
          ]
    },
    

    messagesPage: {
        dialogs: [
            {id: 1, name: "Karen"}, 
            {id: 2, name: "Khachik"}, 
            {id: 3, name: "Gevorg"}, 
            {id: 4, name: "Anna Furshet"}, 
            {id: 5, name: "Terzyan"}, 
            {id: 6, name: "Muradyan"}
          ],
        messages: [
            {id: 1, message: "Hi"}, 
            {id: 2, message: "How it is?"}, 
            {id: 3, message: "yo"}, 
            {id: 4, message: "How it is?"}, 
            {id: 5, message: "yo"}
          ]
    }
    
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
} 

export default state;
