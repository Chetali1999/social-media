import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../Store/Post-list-store";

const Post = ({ post }) => {

    const { deletePost } = useContext(PostList);

    return (

        <>
            <div className="card post-card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}
                        <span onClick={() => deletePost(post.id)} class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            <AiFillDelete />
                            <span className="visually-hidden">unread messages</span>
                        </span>

                    </h5>
                    <p className="card-text">{post.body}</p>
                    {post.tags.map((tag =>
                        <span className="badge text-bg-primary me-2" key={tag}>{tag}</span>
                    ))}
                    <div className="alert alert-success reactions" role="alert">
                        {post.reactions}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;