import "./HeroFour.css";
import Photo from "../../assets/main2.png";
function HeroFour() {
    return (
        <div className="HeroFour">
            <div className="pic">
                <img src={Photo}></img>
            </div>
            <div className="part">
                <h1>Built for Creatives,</h1>
                <h1 style={{marginBottom:"40px"}}>by Creatives</h1>
                <p>I'm a paragraph. Click here to add your own text and edit</p>
                <p>me. It’s easy. Just click “Edit Text” or double click me to</p>
                <p>add your own content and make changes to the font. I’m</p>
                <p>a great place for you to tell a story and let your users</p>
                <p>know a little more about you.</p>
                <div className="super hello">
                    <div className="innerContent">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Q5HikdFSZCenwO6BiTPzpo9WDJeYpahLHA&s"></img>
                        <span>All-In-One ToolKit</span>
                    </div>
                    <div className="innerContent">
                        <img src="https://i.pinimg.com/564x/4a/48/09/4a4809bfe7365dd1c7adfe46f62c3b43.jpg"></img>
                        <span>Integrated File Sharing</span>
                    </div>
                    <div className="innerContent">
                        <img src="https://cdn-icons-png.flaticon.com/512/73/73812.png"></img>
                        <span>Total Design Freedom</span>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default HeroFour;