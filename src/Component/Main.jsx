const Main = () =>{
    return (
        <>
        <div className="container">
        <div className="header">
        <h3>Geekster Education Planner</h3>
        </div>
        <div className="sub">

        <input type="text" name="name" placeholder="Subject"/>
        </div>
        <div className="num">
        <input type="number" name="number"/>
        </div>
        <div className="btn">
        <button>Add</button>
        </div>

        </div>
        </>
    );
}
export default Main;