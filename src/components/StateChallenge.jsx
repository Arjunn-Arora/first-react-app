import { useState } from "react";

export const StateChallenge = () => {

    const[users, setUsers] = useState([
        {name: "Alpha", age: 25},
        {name: "Bravo", age: 30},
        {name: "Charlie", age: 35},
        {name: "Delta", age: 40},
    ])
    
    return(
        <>
            <h1>List of Users</h1>
            <ul>
                {users.map((currElem, index) => {
                    return(
                        <li key={index}>{currElem.name} - {currElem.age}</li>
                    );
                })}
            </ul>
        </>
    );

}