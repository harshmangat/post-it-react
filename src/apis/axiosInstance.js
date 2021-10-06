import axios from "axios";


export default axios.create({
  baseURL: "https://peerup-web-dev-srv.herokuapp.com/parse",
  headers: {
    "X-Parse-Application-Id": "MVV6avFp",
    "Content-Type": "application/json",
  },
})