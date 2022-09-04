import "./App.css";
import React, { useEffect } from "react";
import { getGifs, getTrending } from "./services/Service";
import { useState } from "react";
//import Carousel from "react-bootstrap/Carousel";

import Dogs from "./components/Dogs";
import Trending from "./components/Trending";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Container } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function App() {
  const [gif, setGif] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending(4).then(onGetTrendingSuccess).catch(onGetTrendingError);
  }, []);

  const onGetTrendingSuccess = (response) => {
    console.log(response.data);
    setTrending(response.data.data);
  };
  const onGetTrendingError = (response) => {
    console.log(response);
  };

  useEffect(() => {
    getGifs(4, 55).then(onGetGifSuccess).catch(onGetGifError);
  }, []);

  const onGetGifSuccess = (response) => {
    console.log(response.data.data);
    setGif(response.data.data);
  };

  const onGetGifError = (response) => {
    console.log("Error:", response);
  };

  const mappedGif = (mapped, index) => {
    return <Dogs data={mapped} key={index} />;
  };

  const mappedTrending = (mapped, index) => {
    return <Trending data={mapped} key={index} />;
  };

  let mapGif = gif.map(mappedGif);
  console.log(mapGif);
  let mapTrend = trending.map(mappedTrending);

  console.log(mapTrend);

  return (
    <div className="container">
      <nav className="navBar">NavBAr</nav>
      <div>
        <div className="d-flex justify-content-center">{mapTrend}</div>
        <div className="d-flex justify-content-center">{mapGif}</div>
      </div>
    </div>
  );
}

export default App;
