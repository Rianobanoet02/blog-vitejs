const app = document.getElementById("app");

export default function notFound() {
  app.innerHTML = `
  <div class="w-screen min-h-screen max-w-[1440] mx-auto flex flex-auto justify-center items-center">
  <h1 class="text-orange-500 text-4xl font-light"> not found</h1>
  </div>
  `;
}
