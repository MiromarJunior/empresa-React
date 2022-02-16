import httpClient from "../api";


const getAll = () => {
  return httpClient.get("/");
  
}


export default {getAll};