import { useContext } from "react"
import { AppContext } from './AppProvider';

function InfoRend() {

    const { data, setData } = useContext(AppContext);
    return (
        <div>
            {
                data.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))
            }
        </div>
    );
}

export default InfoRend;