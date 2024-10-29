import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const Post = useLoaderData()
    const {userId,id,title,body} = Post
    return (
        <div>
             <div style={{border:"1px solid red", padding:"20px", borderRadius:"12px"}}>
                         <strong>User Id : {userId}</strong>
                         <h1>Post Title : {title}</h1>
                         <p>post Id : {id}</p>
                          <p>{body}</p>
                         
                    </div>
        </div>
    );
};

export default PostDetails;