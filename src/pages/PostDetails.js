import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "./PostDetails.css";


const PostDetails = () => {

    const [post, setPost] = useState({});
    const { id } = useParams();


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(response => response.json())
        .then(result => {
            setPost(result);
        });
    }, [id]);

    return ( 
        <div className="PostDetails"> 
            <Header/>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
 
export default PostDetails;