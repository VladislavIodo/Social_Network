let renderEntireTree = ()=> {

}

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you', likesCount: 132 },
      { id: 2, message: 'It is my first post', likesCount: 1029 },
      { id: 3, message: 'It is my first post', likesCount: 568 },
      { id: 4, message: 'It is my first post', likesCount: 109 }
    ],
    newPostText: "It-Kamasutra"
    
  },
    dialogsPage: {
      messages:[
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your React)' },
        { id: 3, message: 'Thanks, it is ok!' },
        { id: 4, message: 'Nice to meet you!' }
        ],
        dialogs: [
          { id: 1, name: 'Vladislav' },
          { id: 2, name: 'Dmitriy' },
          { id: 3, name: 'Ylianna' },
          { id: 4, name: 'Mahail' }
          ]
    }   
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export const subscribe = (observer) => {
  renderEntireTree = observer
}

export default state;