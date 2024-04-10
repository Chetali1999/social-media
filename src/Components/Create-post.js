import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-list-store";

const CreatePost = () => {

    const { addPost } = useContext(PostList);

    const userIDElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userID = userIDElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(' '); 

        addPost(userID, postTitle, postBody, reactions, tags)
     
        userIDElement.current.value= '';
        postTitleElement.current.value = '';
        postBodyElement.current.value = '';
        reactionsElement.current.value = '';
        tagsElement.current.value = '';
    }


    return (
        <>
            <form className="create-post" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Enter Your User Id Here</label>
                    <input
                        type="text"
                        placeholder="Your user id"
                        className="form-control"
                        id="userId"
                        ref={userIDElement}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input
                        type="text"
                        placeholder="How are you feeling today"
                        className="form-control"
                        id="title"
                        ref={postTitleElement}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Post Content</label>
                    <textarea
                        type="text"
                        rows={4}
                        placeholder="Tell us more about it"
                        className="form-control"
                        id="body"
                        ref={postBodyElement}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">No Of Reaction</label>
                    <input
                        type="text"
                        placeholder="How many people to this post"
                        className="form-control"
                        id="reactions"
                        ref={reactionsElement}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Enter Your Hashtag Here</label>
                    <input
                        type="text"
                        placeholder="Please enter tags using space"
                        className="form-control"
                        id="tags"
                        ref={tagsElement}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </>
    )
}

export default CreatePost;