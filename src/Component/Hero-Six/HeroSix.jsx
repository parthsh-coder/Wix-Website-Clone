import Pic1 from "../../assets/insideImage1.png";
import Pic2 from "../../assets/insideImage2.png";
import Pic3 from "../../assets/insideImage3.png";
import Card1 from "./Card1";
import "./HeroSix.css";
function HeroSix() {
    return (
        <div className="HeroSix">
            <div className="heading">
                <h1>What Our Clients Say</h1>
            </div>
            <div className="box">
                <Card1 data1="“I'm a testimonial. Click to" data2="edit me and add text that" data3="says something nice about" data4="you and your services. Let" data5="your customers review you" data6="and tell their friends how" data7="great you are.”" image={Pic1} person1="Parth" />
                <Card1 data1="“I'm a testimonial. Click to" data2="edit me and add text that" data3="says something nice about" data4="you and your services. Let" data5="your customers review you" data6="and tell their friends how" data7="great you are.”" image1={Pic2} person1="Hardik" />
                <Card1 data1="“I'm a testimonial. Click to" data2="edit me and add text that" data3="says something nice about" data4="you and your services. Let" data5="your customers review you" data6="and tell their friends how" data7="great you are.”" image2={Pic3} person1="Parth" />

            </div>
        </div>
    );
}
export default HeroSix;