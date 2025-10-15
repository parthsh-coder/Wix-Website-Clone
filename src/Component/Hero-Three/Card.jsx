import "./Card.css";
function Card(props){

    return(
        <div className="Card">
            <img src={props.image}></img>
            <h2 style={{marginTop:"40px"}}>{props.head1}</h2>
            <h2>{props.head2}</h2>
            <p style={{marginTop:"20px"}}>{props.data1}</p>
            <p>{props.data2}</p>
            <p>{props.data3}</p>
            <p>{props.data4}</p>
            <p>{props.data5}</p>
        </div>
    );
}
export default Card;