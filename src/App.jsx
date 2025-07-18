import ReactLenis from "lenis/react";

export default function App() {
  return (
    <ReactLenis root>
      <main>
        <section className="h-screen flex justify-center items-center bg-[#0b0e14]">
          <h1 className="text-9xl text-white">Welcome</h1>
        </section>

        <section className="h-screen bg-[#030712]"></section>

        <section className="h-screen flex justify-center items-center bg-[#0b0e14]">
          <h1 className="text-9xl text-white">Come Back Soon</h1>
        </section>
      </main>
    </ReactLenis>
  );
}
