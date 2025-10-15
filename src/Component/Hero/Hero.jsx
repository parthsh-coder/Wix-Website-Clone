import "./Hero.css";
import Image from "../../assets/main.png";
function Hero() {
    return (
        <div>
            <div className="Hero">

                <div className="content">
                    <h1>Communicate.</h1>
                    <h1>Collaborate. Create.</h1>
                    <div className="text">
                        <h2 style={{marginTop:"50px"}}>WeDu provides an effective and powerful</h2>
                        <h2>way to manage your projects</h2>
                    </div>
                    <button>Get Started</button>

                    <div className="super">
                        <div className="innerContent">
                            <img src="https://cdn-icons-png.flaticon.com/512/558/558722.png"></img>
                            <span>Speed & Security</span>
                        </div>
                        <div className="innerContent">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2TC9Qn8N4wj97osOtOxwv9DlSRE_ZEldcA&s"></img>
                            <span>Flexibility & Scalability</span>
                        </div>
                        <div className="innerContent">
                            <img src="https://cdn-icons-png.flaticon.com/512/3391/3391797.png"></img>
                            <span>Better Collaboration</span>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={Image}></img>
                </div>
            </div>
        </div>
    );

}
export default Hero;