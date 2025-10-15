import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="logo">
                <img style={{ height: "60px" }} src={Logo}></img>
                <h2>Xotiv</h2>
            </div>
            <div className="content">
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing Plans</li>
                    <li>Contact</li>
                </ul>

            </div>
            <div className="inner">
                <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"></img>
                
                <h2>Login</h2>
            </div>
            <button>Get Started</button>
        </div>
    );
}
export default Navbar;