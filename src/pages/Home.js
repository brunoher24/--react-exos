import './Home.css';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setPosts(json);
      });
    }, []);

    return (
        <div className="Home">
            <Header/>
            <h1>Page d'accueil</h1>
            <ul>
                {posts.length > 0 && posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

      </div>
    )
}

export default Home;