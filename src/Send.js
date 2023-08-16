import { useState, useContext } from "react";
import './App.css';
import axios from "axios";
import { AppContext } from './AppProvider';
import { Link } from "react-router-dom";

function Send() {
    const [info, setInfo] = useState('');
    const [title, setTitle] = useState('');
    const [isPending, setIsPending] = useState(false);
    const { data, setData, URL } = useContext(AppContext);

    console.log(URL)
    function handleSubmit(e) {
        e.preventDefault();
        setIsPending(true)
        const added = { title, body: info }
        const postData = async () => {
            try {
                const resp = await axios.post(URL, added)
                setData(prev => [...prev, resp.data])
                console.log(data)
                setIsPending(false)
            } catch (error) {
                console.log(error)
                setIsPending(false)
            }
        }
        postData()
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
                {isPending && <p>...adding</p>}
                {!isPending && <Link to={"/ConectPage"}>ConectPage</Link>}
            </form>
        </header>

    );
}

export default Send;
