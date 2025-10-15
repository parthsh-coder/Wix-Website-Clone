import "./HeroEight.css";
import photo from "../../assets/footerImage.png";
function HeroEight() {
    return (
        <div className="HeroEight">
            <div className="lastContent">
                <h1>Get Ready to Maximize Your Productivity</h1>
                <h1>With Our Workflow Solutions</h1>
                <button>Get Started</button>
            </div>
            <img src={photo}></img>
        </div>
    );
}
export default HeroEight;