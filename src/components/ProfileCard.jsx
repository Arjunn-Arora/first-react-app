const ProfileCard = (props) => {
    //const {currElem} = props;
    return(
        <div>
            <h2>Name = {props.name}</h2>
            <h2>Age = {props.age}</h2>
            <h2>{props.greetings}</h2>
            <p>Hobbies: abc, def, ghi</p>
            <button>Contact Now</button>
        </div>
    );
}

export default ProfileCard