import { useState } from "react";

function App() {
  const [ role, setRole ] = useState("");

  const dataIndex = role === "designer" ? 0 : role === "engineer" ? 1 : undefined;

  return (
    <>
      <header className="text-[color:var(--black-color)]/50 bg-[color:var(--white-color)] h-[40rem]">
        <p>HERO SECTION</p>
        <div className="flex h-[100%]">
          <section onClick={setRole("designer")} className="w-[50%] h-[100%] cursor-pointer">
            <h2>designer</h2>
          </section>
          <section onClick={setRole("engineer")} className="w-[50%] cursor-pointer">
            <h2>engineer</h2>
          </section>
        </div>
      </header>
      <main>Hello World!</main>
    </>
  );
}

export default App;
