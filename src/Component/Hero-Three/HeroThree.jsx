import "./HeroThree.css";
import Card from "./Card";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
function HeroThree() {
    return (
        <div className="container">
            <div className="info">
                <h1>What We Offer</h1>
                <h3 style={{marginTop:"30px"}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy.</h3>
                <h3>Just click “Edit Text” or double click me to add your own content and</h3>
                <h3>make changes to the font.</h3>
            </div>

            <div className="Cards">
                <Card image={Image1} head1={"Workflows"} head2={"That Work"} data1={"I'm a paragraph. Click here to"} data2={"add your own text and edit me."} data3={"I’m a great place for you to tell a"} data4={"story and let your users know a"} data5={"little more about you."}/>
                <Card image={Image2} head1={"All-In-One"} head2={"Solution"} data1={"I'm a paragraph. Click here to"} data2={"add your own text and edit me."} data3={"I’m a great place for you to tell a"} data4={"story and let your users know a"} data5={"little more about you."}/>
                <Card image={Image3} head1={"Comprehensive"} head2={"Customer Support"} data1={"I'm a paragraph. Click here to"} data2={"add your own text and edit me."} data3={"I’m a great place for you to tell a"} data4={"story and let your users know a"} data5={"little more about you."}/>
                <Card image={Image4} head1={"Smart"} head2={"Automation Tools"} data1={"I'm a paragraph. Click here to"} data2={"add your own text and edit me."} data3={"I’m a great place for you to tell a"} data4={"story and let your users know a"} data5={"little more about you."}/>
            </div>
        </div>
    );
}
export default HeroThree;