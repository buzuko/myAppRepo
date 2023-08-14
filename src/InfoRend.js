import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

function InfoRend() {
    const location = useLocation();
    const { data } = location.state;
    console.log(data)

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