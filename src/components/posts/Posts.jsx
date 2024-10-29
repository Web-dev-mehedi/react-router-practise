import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Posts = () => {

    const posts = useLoaderData();
    const [newPosts,setNewPosts] = useState(posts.slice(0,10))
       console.log(posts)
     const handleClick= (posts)=>{
        setNewPosts(posts)
     }

    return (
        <div>
            <h1>total posts {newPosts.length}</h1>

            <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"10px"}}>
            {
                newPosts.map( item =>(
                    <div style={{border:"1px solid red", padding:"20px", borderRadius:"12px"}} key={item.id}>
                          <p>post Id : {item.id}</p>
                         <h1>Post Title : {item.title}</h1>
                       
                         <Link to={`/posts/${item.id}`}><button>Post details</button></Link>
                    </div>
                ))
            }
            
            </div>
            <button style={{margin:"20px 20px", padding:"10px 20px"}} onClick={()=>handleClick(posts)} >See ALL</button>
        </div>
    );
};

export default Posts;