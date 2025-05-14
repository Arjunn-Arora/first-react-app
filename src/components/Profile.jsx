import ProfileCard from "./ProfileCard";
const Profile = () => {
    return(
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
                name = "Alice"
                age = {25}
                greetings = {
                    <h2>Hello There !!</h2>
                } />
            </div>
    );
}

export default Profile