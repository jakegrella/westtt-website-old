import Canvas from "./components/Canvas";

export default function Home() {
    return (
      <main>
        <span>Welcome to</span>
        <h1>Westtt</h1>
        <span>we do</span>
        <h2>Design</h2>
        <span>and</span>
        <h2>Branding</h2>
        <div id='canvas-container' className="w-full h-[50rem] border border-red-500">
          <Canvas />
        </div>
      </main>
    );
  }
  