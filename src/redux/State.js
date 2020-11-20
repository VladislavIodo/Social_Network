const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let store ={
  _state: {
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
      ],
      newMessageBody: ''
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer)  {
    this._renderEntireTree = observer
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._renderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._renderEntireTree(this._state);
    }
    else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state)
    }
  }
}
let test = a;

export const addPostActionCreator = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text})

window.store=store;

export default store;