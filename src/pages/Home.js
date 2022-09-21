const app = document.getElementById("app");
import Navbar from "../components/navbar";

export default function Home() {
  document.title = "Home";
  app.innerHTML = `
  ${Navbar()}
  <div class="w-screen min-h-screen max-w-[1440px]">
    <h1 class="text-orange-500"> Home Page</h1>

 
  </div>
  `;
}
