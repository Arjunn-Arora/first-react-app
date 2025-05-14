import styled from "styled-components";


const CardList = (props) => {
    const {currElem} = props;
    
    const getRatingClass = (rating) => {
        const num = parseFloat(rating);
         if (num >= 8.5) return "green";
         else return "yellow";
    };
    
    return(
                <li key={currElem.id}>
                <div className="card">
                        <div className="card-img img-fluid">
                            <img src={currElem.img_url} alt="Card Image" width="100%" height="100%"/>
                         </div>
                    <div className="card-content">
                     <h2 className="text-3xl font-bold px-4 py-4 text-cyan-400">{currElem.name}</h2>
                     <h3><span className={`rating-badge ${getRatingClass(currElem.rating)}`}>Ratings: {currElem.rating}</span></h3>
                     <h3>Story: {currElem.description}</h3>
                     <br />
                     <h3>Category: {currElem.genre}</h3>
                     <button className={`wtch-btn ${getRatingClass(currElem.rating)}`}>Watch Now</button>
                    </div>
                </div>
            </li>  
        );

        
};

export default CardList