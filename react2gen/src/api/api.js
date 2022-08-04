import axios from "axios";

const api = axios.create({
    baseURL:'https://api.quotable.io/'
})

const apicat = axios.create({
    baseURL: "https://api.thecatapi.com/",
  });

export  {api,apicat};