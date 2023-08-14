import { useState } from "react";
import './App.css';

function Send() {
    const [info, setInfo] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('mario');
    const [DBInfo, setDBInfo] = useState([])
    function handleSubmit(e) {
        e.preventDefault();
        const added = { title, body: info }
        console.log(added)
        fetch("http://localhost:8000/DBData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(added)
        })
            .then(console.log("done1"))
    }
    function check() {
        fetch("hhttp://localhost:8000/DBData")
            .then(response => {
                console.log("here")
                console.log(response)
                return response.json();
            })
            .then(data => console.log(data))
    }
    return (
        <header className="Send-header">
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>put your text: </label>
                <input
                    type="text"
                    required
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                />
                <button>Add Blog</button>
            </form>
            <button onClick={check}>check</button>
        </header>

    );
}

export default Send;
