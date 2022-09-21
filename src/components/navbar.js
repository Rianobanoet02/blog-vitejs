export default function Navbar() {
  return `
  <nav class="w-full h-20 flex bg-slate-800">
    <div class=" w-full padding-x max-w-[1440px] flex items-center justify-start px-4 mx-auto ">
    <img src="/public/icon-48x48.png" class="mr-5">
      <h1 class="text-white text-4xl font-light">Sleep CoDe</h1>
      <menu class="flex gap-4 text-white ml-auto select-none cursor-pointer">
        <a href="/">Login</a>
        <a href="/">Register</a>
        <a href="/"> Home</a>
  
      </menu>
  
  </div>
  </nav>
  `;
}
