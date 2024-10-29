import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();
    const {name,email,username}= userDetails
    return (
        <div>
            <h1>User Name : {name}</h1>
            <p>Email :{email}</p>
            <p>Username : {username}</p>
        </div>
    );
};

export default UserDetails;