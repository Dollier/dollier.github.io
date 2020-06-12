import React from "react";
import "./home.css";

const Home = ({children, name, status, test}) => (
  <>
  <div className="container">
      <div className="item a"></div>
      <div className="item b">
          <div className="item-name">
          {/* <h1>{name}</h1>
          <p>{status}</p> */}
          </div>
      </div>
      <div className="item c">
      </div>
      <div className="item d"></div>
      <div className="item e">
      </div>
      <div className="item f"></div>
      <div className="item g"></div>
      <div className="item h"></div>
  </div>
  {/* <main style={{margin:"250px auto", width:"40%",fontSize:"1rem", fontWeight: "800", color: "#fff", opacity: test, fontFamily: `'Aquatico', sans-serif`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum reprehenderit provident quasi cupiditate qui nulla sit in error accusantium, soluta ut, esse maiores laboriosam molestias eos, eligendi repellendus molestiae.</main>  */}
  </> 
);

const socialMedia = {
  display: "block",
  width: "100%",
  padding: "10px"
}

const github = {
  marginLeft: "5px",
  color: "#333",
  width: "36px",
  height: "36px"
}

const linkedin = {
  marginLeft: "5px",
  color: "#333",
  width: "36px",
  height: "36px"
}

export default Home;