import Navbar from "../components/navbar";

const app = document.getElementById("app");

export default function Login() {
  app.innerHTML = `
  ${Navbar()}
  <div class="w-screen min-h-screen max-w-[1440px]">
  <h1 class="text-orange-500"> Login Page</h1>
  </div>
  `;
}
