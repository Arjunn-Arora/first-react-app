export const EventProps = () => {

    const handleWelcome = (user) => {
        alert(`Hey ${user}, Welcome!!`)
    }

    const handleMouseEnter = () => {
        alert(" Hover Effect Triggered!!")
    }

    return(
        <>
            <WelcomeUser onClick = {() => handleWelcome("Arjun")}
                onMouseEnter = {handleMouseEnter}
                />
        </>
    );
}

const WelcomeUser = (props) => {
    return(
        <>
            <button onClick={props.onClick}>Click Me 1</button>
            <button onMouseEnter={props.onMouseEnter}>Click Me 2</button>
        </>
    );
}