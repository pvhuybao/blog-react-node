import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: 'title 1',
  //     desc: 'desc 1',
  //     img: 'https://i.ytimg.com/an_webp/re3OIOr9dJI/mqdefault_6s.webp?du=3000&sqp=CL7To6EG&rs=AOn4CLA9FdZoFzn6168bXh9XDceq4aUOfw'
  //   },
  //   {
  //     id: 2,
  //     title: 'title 2',
  //     desc: 'desc 2',
  //     img: 'https://i.ytimg.com/an_webp/re3OIOr9dJI/mqdefault_6s.webp?du=3000&sqp=CL7To6EG&rs=AOn4CLA9FdZoFzn6168bXh9XDceq4aUOfw'
  //   },
  //   {
  //     id: 3,
  //     title: 'title 3',
  //     desc: 'desc 3',
  //     img: 'https://i.ytimg.com/an_webp/re3OIOr9dJI/mqdefault_6s.webp?du=3000&sqp=CL7To6EG&rs=AOn4CLA9FdZoFzn6168bXh9XDceq4aUOfw'
  //   },
  // ]

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
