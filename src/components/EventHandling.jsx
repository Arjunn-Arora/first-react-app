import "../index.css"

const EventHandling = () => {

    const Alert = () => {
        window.alert("This is an Alert Message!!")
    }

    const welcomeMessageToUser = (props) => {
        alert(`Hey ${props}, Welcome to this page`)
    }

    return(
        <>
           <h1>Event Handling</h1>
           <h2 className="text-blue-500">Named Event:</h2><br />
            <button onClick={Alert} className="p-4 d-block m-4 bg-blue-500 rounded-lg">Click Me</button>
            <br />
            <h2 className="text-blue-500">Inline Arrow Event:</h2><br />
            <button onClick={()=> alert("It also Worked!!")}>Click Me Also</button>
            <br />
            <button onClick={() => welcomeMessageToUser("Arjun")}>Welcome</button>
        </>
    );
}

export default EventHandling