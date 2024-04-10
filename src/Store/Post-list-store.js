import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {

    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.postID
        );
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispachPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userID, postTitle, postBody, reactions, tags) => {
        dispachPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                userId: userID,
                tags: tags
            }
        })
    }

    const deletePost = (postID) => {
        dispachPostList(
            {
                type: 'DELETE_POST',
                payload: {
                    postID,
                },
            }
        )
    }

    return (
        <PostList.Provider value={{ postList: postList, addPost: addPost, deletePost: deletePost }}>
            {children}
        </PostList.Provider>
    )
};

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to home',
    body: 'Hi friends, I am chetali',
    reactions: '2',
    userId: 'user_1',
    tags: ["Enjoing", "Vacation"]
},
{
    id: '2',
    title: 'Pass ho bhai',
    body: 'Hi friends, I am chetali',
    reactions: '15',
    userId: 'user_2',
    tags: ["Enjoing!!", "Vacation"]
}
]

export default PostListProvider;