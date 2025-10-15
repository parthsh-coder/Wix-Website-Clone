import "./Card1.css";
function Card1(props) {
    return (
        <div className="Card1">
            <div className="inside">
                <ul><li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="inside2">
                <p>{props.data1}</p>
                <p>{props.data2}</p>
                <p>{props.data3}</p>
                <p>{props.data4}</p>
                <p>{props.data5}</p>
                <p>{props.data6}</p>
                <p>{props.data7}</p>
                <div className="inside3">
                    <img src={props.image}></img>
                    <img style={{position:"relative",right:"42px" , top:"18px"}} src={props.image1}></img>
                    <img style={{position:"relative",right:"32px" , top:"25px"}}  src={props.image2}></img>
                    <h4>{props.person1}</h4>
                </div>
            </div>
        </div>
    );
}
export default Card1;