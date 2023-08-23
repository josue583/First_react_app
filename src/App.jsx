import react from "react"
import react_dom from "react-dom";

import Card from "./Card";
import Contacts from "./Contact"
// import Avator from "./Avator";
function Createcard(Contact){
 return (<Card
        key={Contact.id}
        name={Contact.name} 
        img={Contact.img}
        phone={Contact.phone}
        email={Contact.email}/>
        );
}

function App(){

  console.log(Contacts);
   return(
   <div className="All_one">
   {Contacts.map(Createcard)}

   {/* <h1>My Content</h1>
   <Card name={Contacts[0].name}
    img={Contacts[1].img}
     tel={Contacts[2].phone}
      email={Contacts[1].Email}/>
   <Card name="Joshua" img="https://i.ytimg.com/vi/1wp83gtHk58/hqdefault.jpg" tel="+250783627376" email="joshua@gmail.com"/> */}
 </div>);
};

export default App;

