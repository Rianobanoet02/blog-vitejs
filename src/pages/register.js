import Navbar from "../components/navbar";
import Home from "./Home";
import axios from "axios";

const app = document.getElementById("app");

window.handleRegister = (event) => {
  event.preventDefault();

  let email = event.target.email.value;
  let password = event.target.password.value;
  let password2 = event.target.password2.value;
  if (!email || !password || !password2) {
    return alert("silahkan isi data anda");
  }

  if (password !== password2) {
    return alert("password tidak sama");
  }

  axios
    .post("http://localhost:3000/users", {
      email: email,
      password: password,
    })
    .then((res) => {
      alert("register berhasil");
      window.location.href = "/home";
    })
    .catch((err) => {
      elert("terjadi kesalahan");
      console.alert(err);
    });
};

export default function Register() {
  app.innerHTML = `
  ${Navbar()}
  <div class="w-screen min-h-screen max-w-[1440px] mx-auto p-4">
  <h1 class="text-orange-500"> Login Page</h1>

  <form class="w-[320px] flex flex-col gap-4 mx-auto" onsubmit="handleRegister(event)">
    <div class="flex flex-col gap-3 text-light">
      <label for="email">Email</label>
      <input type="email" id="email" class="h-10 px-3 font-light rounded-md border-slate-500 border-[2px]">
    </div>
    <div class="flex flex-col gap-3 text-light">
      <label for="email">password</label>
      <input type="password" id="password" class="h-10 px-3 font-light rounded-md border-slate-500 border-[2px]">
    </div>
    <div class="flex flex-col gap-3 text-light">
      <label for="email">Konfirmasi password</label>
      <input type="password" id="password2" class="h-10 px-3 font-light rounded-md border-slate-500 border-[2px]">
    </div>
    <button type="sumbit" class=" h-10 w-[30%] md-auto " >Register</button>
  </form>
  </div>
  `;
}
