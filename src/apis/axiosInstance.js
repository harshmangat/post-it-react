import axios from "axios";


export default axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    "X-Parse-Application-Id": "NZzn8xAArfEvJzcdVgJ8twPmssnKKDAx1subA9Iu",
    "X-Parse-REST-API-Key": "lnR70F0SNxOfIh8bmZpRqw792V0vZyep9USnPXzs",
    "Content-Type": "application/json",
  },
})