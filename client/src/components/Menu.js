import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
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
  //     title: "title 1",
  //     desc: "desc 1",
  //     img: "https://i.ytimg.com/an_webp/re3OIOr9dJI/mqdefault_6s.webp?du=3000&sqp=CL7To6EG&rs=AOn4CLA9FdZoFzn6168bXh9XDceq4aUOfw",
  //   },
  //   {
  //     id: 2,
  //     title: "title 2",
  //     desc: "desc 2",
  //     img: "https://i.ytimg.com/an_webp/re3OIOr9dJI/mqdefault_6s.webp?du=3000&sqp=CL7To6EG&rs=AOn4CLA9FdZoFzn6168bXh9XDceq4aUOfw",
  //   },
  //   {
  //     id: 3,
  //     title: "title 3",
  //     desc: "desc 3",
  //     img: "https://i.ytimg.com/an_webp/re3OIOr9dJI/mqdefault_6s.webp?du=3000&sqp=CL7To6EG&rs=AOn4CLA9FdZoFzn6168bXh9XDceq4aUOfw",
  //   },
  // ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../uploads/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
