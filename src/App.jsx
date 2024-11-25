import { useState } from "react";
import chroma from "chroma-js";
import "./App.css";
import ColorPalette from "./components/ColorPalette";
import ButtonPreview from "./components/ButtonPreview";

function App() {
  const [theme, setTheme] = useState("modern");
  const [palette, setPalette] = useState(generatePalette("modern"));

  function generatePalette(type) {
    let baseHue;
    switch (type) {
      case "modern":
        baseHue = Math.random() * 360;
        break;
      case "soft":
        baseHue = Math.random() * 360;
        break;
      case "minimalist":
        baseHue = Math.random() * 60 + 180; // Blues and greens
        break;
      default:
        baseHue = Math.random() * 360;
    }

    const light = {
      background: chroma.hsl(baseHue, 0.1, 0.98),
      surface: chroma.hsl(baseHue, 0.1, 0.95),
      primary: chroma.hsl(baseHue, 0.6, 0.55),
      secondary: chroma.hsl((baseHue + 30) % 360, 0.5, 0.6),
      accent: chroma.hsl((baseHue + 180) % 360, 0.6, 0.5),
      text: chroma.hsl(baseHue, 0.1, 0.2),
    };

    const dark = {
      background: chroma.hsl(baseHue, 0.1, 0.1),
      surface: chroma.hsl(baseHue, 0.1, 0.15),
      primary: chroma.hsl(baseHue, 0.5, 0.6),
      secondary: chroma.hsl((baseHue + 30) % 360, 0.4, 0.55),
      accent: chroma.hsl((baseHue + 180) % 360, 0.5, 0.6),
      text: chroma.hsl(baseHue, 0.1, 0.9),
    };

    return { light, dark };
  }

  const handleGenerate = () => {
    setPalette(generatePalette(theme));
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    setPalette(generatePalette(e.target.value));
  };

  return (
    <div className="app">
      <header>
        <h1>Color Palette Generator</h1>
        <div className="controls">
          <select value={theme} onChange={handleThemeChange}>
            <option value="modern">Modern</option>
            <option value="soft">Soft</option>
            <option value="minimalist">Minimalist</option>
          </select>
          <button onClick={handleGenerate} className="generate-btn">
            Generate
          </button>
        </div>
      </header>

      <main>
        <section className="light-mode">
          <h2>Light Mode</h2>
          <ColorPalette colors={palette.light} />
          <ButtonPreview colors={palette.light} />
        </section>

        <section className="dark-mode">
          <h2>Dark Mode</h2>
          <ColorPalette colors={palette.dark} />
          <ButtonPreview colors={palette.dark} />
        </section>
      </main>
    </div>
  );
}

export default App;
