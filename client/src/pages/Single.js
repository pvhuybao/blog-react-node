import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://i.ytimg.com/an_webp/re3OIOr9dJI/mqdefault_6s.webp?du=3000&sqp=CL7To6EG&rs=AOn4CLA9FdZoFzn6168bXh9XDceq4aUOfw"
          alt=""
        />
        <div className="user">
          <img
            src="https://i.ytimg.com/an_webp/re3OIOr9dJI/mqdefault_6s.webp?du=3000&sqp=CL7To6EG&rs=AOn4CLA9FdZoFzn6168bXh9XDceq4aUOfw"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>title 1</h1>
        <p>paragasdf 1</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
