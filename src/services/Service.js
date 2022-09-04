import axios from "axios";
const endpoint =
  "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json";

export const getCurrentUser = () => {
  const config = {
    method: "GET",
    url: endpoint,
    withCredentials: false,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config).then().catch();
};

export const getGifs = (limit, offset) => {
  const gifs = {
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/search?api_key=S9kRmh6Y6ZxJgvQy5aHsRkqQAO7nomcE&q=dog&limit=${limit}&offset=${offset}&rating=g&lang=en`,
    withCredentials: false,
    crossdomain: false,
    headers: { "Content-Type": "application/json" },
  };

  return axios(gifs);
};

export const getTrending = (limit) => {
  const config = {
    method: "GET",
    url: `https://api.giphy.com/v1/gifs/trending?api_key=S9kRmh6Y6ZxJgvQy5aHsRkqQAO7nomcE&limit=${limit}&rating=pg-13`,
    withCredentials: false,
    crossdomain: false,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const Service = {
  getGifs,
  getCurrentUser,
  getTrending,
};

export default Service;
