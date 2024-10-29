import { useLoaderData } from "react-router-dom";


const Users = () => {

    const users = useLoaderData();

    return (
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"10px"}} >
            {
                users.map(item=>(
                    <div key={item.id} style={{padding:"20px", border:"1px solid green",borderRadius:"12px" }}>
                        <h1>Name : {item.name}</h1>
                        <p>Username: {item.username}</p>
                        <p>Email : {item.email}</p>
                        <p>Website : {item.website}</p>
                         
                    </div>
                ))
            }
        </div>
    );
};

export default Users;