import "./style.css";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Register from "./src/pages/register";

const page = window.location.pathname;
const app = document.getElementById("app");

switch (page) {
  case "/":
    Home();
    break;
  case "/Login":
    Login();
    break;
  case "/Register":
    Register();
    break;

  default:
    app.innerHTML = `<h1> Page not found</h1>`;
}
