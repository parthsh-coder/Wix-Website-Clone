import "./HeroNine.css";
function HeroNine() {
    return (
        <div className="main">
            <div className="HeroNine">
                <div className="footerContent">
                    <h4>Contact</h4>
                    <div className="one">
                        <ul>
                            <li>500 Terry Francine Street</li>
                            <li>San Francisco, CA 94158</li>

                            <br></br>

                            <li>General Inquiries:</li>
                            <li>123-456-7890</li>
                        </ul>
                    </div>
                    <div className="one">
                        <ul>
                            <li>Sales:</li>
                            <li>San Francisco, CA 94158</li>

                            <br></br>

                            <li>General Inquiries:</li>
                            <li>123-456-7890</li>
                        </ul>
                    </div>
                    <h4>Quick Links</h4>
                    <div className="two">
                        <ul>
                            <li>Terms & Condtions</li>
                            <br></br>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <h4>Follow</h4>
                    <div className="three">
                        <ul>
                            <li>Sign up to get the latest news</li>
                            <li>on our product.</li>

                            <br></br>
                            <label>Email*</label>
                            <br></br>
                            <input type="email"></input>
                            <br></br>
                            <button>Subscribe</button>
                        </ul>
                    </div>
                    <div className="four">
                        <h4 style={{marginTop:"50px"}}>LinkedIn</h4>
                        <h4 style={{marginTop:"30px"}}>YouTube</h4>
                        <h4 style={{marginTop:"30px"}}>Facebook</h4>
                    </div>
                </div>
            </div>
            <div className="lowerFoot">
                <h4>@Hardik&Parth</h4>
                <h4>@2025</h4>
            </div>
        </div>
    );
}
export default HeroNine;