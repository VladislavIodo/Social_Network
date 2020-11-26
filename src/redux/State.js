import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 132},
                {id: 2, message: 'It is my first post', likesCount: 1029},
                {id: 3, message: 'It is my first post', likesCount: 568},
                {id: 4, message: 'It is my first post', likesCount: 109}
            ],
            newPostText: "It-Kamasutra"
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your React)'},
                {id: 3, message: 'Thanks, it is ok!'},
                {id: 4, message: 'Nice to meet you!'}
            ],
            dialogs: [
                {id: 1, name: 'Vladislav'},
                {id: 2, name: 'Dmitriy'},
                {id: 3, name: 'Ylianna'},
                {id: 4, name: 'Mahail'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)

    }
}



window.store = store;

export default store;