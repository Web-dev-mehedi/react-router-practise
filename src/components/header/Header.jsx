import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav style={{display:"flex",gap:"20px"}}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact"> Contacts</Link>
                <Link to="/users"> Users</Link>
                <Link to ="/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;