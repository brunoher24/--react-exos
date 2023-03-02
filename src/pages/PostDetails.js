import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./PostDetails.css";


const PostDetails = () => {

    const [post, setPost] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(result => {
            console.log(result);
        });
    }, []);

    return (  
        <Header/>

    );
}
 
export default PostDetails;