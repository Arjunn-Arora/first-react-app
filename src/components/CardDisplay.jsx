import seriesData from "../api/seriesData.json"
import CardList from "./CardList";

  const CardDisplay = () => {
    return(
    <ul>
        {seriesData.map((currElem) => 
           <CardList key={currElem.id} currElem={currElem}/>
        )}  
  </ul>
    );
  }

  export default CardDisplay