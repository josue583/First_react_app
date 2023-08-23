import react from "react"
import react_dom from "react-dom";
import Avator from "./Avator";




function Card(props){
    return(<div className="container">
  <div className="header">
  <h2>{props.name}</h2>
      <Avator img={props.img}/>
  </div>
      
      <p>{props.tel}</p>
      <p>{props.email}</p>
      </div>) ;
  }
  export default Card;