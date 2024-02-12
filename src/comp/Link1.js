import React from "react";
import axios from "axios";
import "./style/st.css";
import { useState } from "react";
import { useEffect } from "react";

function Link1() {
  const [yo, setyo] = useState([]);

  const fetch = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=0d6b67c8c6cd4e1f887c5b8f931fcde3"
      )
      .then((res) => {
        console.log(res.data.articles);
        setyo(res.data.articles);
      });
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="link2">
        {  yo.map((i) => {
          return (
            <div className="card">
              <img src={i.urlToImage} alt="" className="card-img" />
              <div className="card-title">{i.title}</div>
              <p className="card-p">{i.description}</p>
              <button className="card-btn" >
                <a className="btn">More Info</a>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Link1;
