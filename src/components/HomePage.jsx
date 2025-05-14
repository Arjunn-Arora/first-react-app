import CardDisplay from "./CardDisplay"

const HomePage = () => {
    return(
        <>
            <div className="container">
      <h1 className="title-heading">List of Best Netflix Series</h1>
      <div className="card-grid">
        <CardDisplay />
      </div>
    </div>
        </>
    )
}

export default HomePage