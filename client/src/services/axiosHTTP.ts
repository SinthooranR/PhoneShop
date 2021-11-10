import axios from "axios";

let baseURL;
if (process.env.NODE_ENV === "production") {
  baseURL = "https://ecommerce-phone-app.herokuapp.com/api";
} else {
  baseURL = "http://localhost:5000/api";
}

export default axios.create({
  baseURL: baseURL,
});
