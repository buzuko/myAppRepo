import './App.css';
import { Link } from "react-router-dom";


function ConectPage() {
    return (
        <div className="App">
            <div className="App-header">
                <Link to={"/Send"}>Send</Link>
                <Link to={"/InfoRend"}>InfoRend</Link>
            </div>
        </div>
    );
}

export default ConectPage;
