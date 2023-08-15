import logo from './logo.svg';
import { useState, useRef } from "react";
import useFetch from "./useFetch"
import { Link } from "react-router-dom";
import './App.css';

function Home() {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [data, setData] = useState([]);

    const { error: fetchError, isPending: fetchIsPending, data: fetchBlogs } = useFetch(title);
    const inputRef = useRef(null)
    const Ref = useRef(null)
    const submitRef = useRef(null)
    const [newTitle, setNewTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewTitle(title)
        setError(fetchError);
        setIsPending(fetchIsPending);
        setData(fetchBlogs);
        if (fetchError) {
            edit()

        }
    };
    function edit() {
        inputRef.current.disabled = false;
        Ref.current.disabled = false;
        submitRef.current.disabled = true;
    }
    function done() {
        inputRef.current.disabled = true;
        Ref.current.disabled = true;
        submitRef.current.disabled = false;
    }

    return (
        <header className="Home-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Home area
            </p>
            <p>
                branch: develop
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    required
                    placeholder="enter URL"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <button onClick={edit} >Edit</button>
                <button ref={Ref} onClick={done} >Done</button>
                <button ref={submitRef} disabled>get API</button>
            </form>
            {isPending && <p>Loading...</p>}
            {error && <p>{'"' + newTitle + '"' + " is not a valid URL"}</p>}
            {!error && data && data.length > 0 && (
                <div>
                    <Link to={{ pathname: "/InfoRend", state: { data } }}>info</Link>
                </div>
            )}
        </header>
    );
}
export default Home;
