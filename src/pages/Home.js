import './Home.css';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <li key={post.id}>
                        <Link to={`/article/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>

      </div>
    )
}

export default Home;