// //import logo from './logo.svg';
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react"

// import './App.css';

// function Create() {
//     const [info, setInfo] = useState([])
//     const [isPending, setIsPending] = useState(false)

//     useEffect(() => {
//         setIsPending(true)
//         fetch("http://localhost:8000/DBData")
//             .then(response => {
//                 setIsPending(false)
//                 return response.json();
//             })
//             .then(data => setInfo(data))
//             .catch(error => {
//                 setIsPending(false)
//                 console.log('Error fetching posts: ', error)
//             });
//     }, [])
//     return (
//         <header className="Create-header">
//             <h1>Create page</h1>
//             <Link to="/Send">Send</Link>
//             {
//                 !isPending ? (
//                     info.length > 0 && info.map(post => (
//                         <li key={post.id}>
//                             <h2>{post.title}</h2>
//                             <p>{post.body}</p>
//                         </li>
//                     ))
//                 ) :
//                     <h1>Loading...</h1>
//             }
//         </header>

//     );
// }

// export default Create;