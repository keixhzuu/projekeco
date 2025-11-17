import React from "react";
import "./App.css"; // styling umum
import HowItWork from "./components/howitwork.jsx";
import ImpactSection from "./components/impactsection.jsx";
import PackageSection from "./components/package.jsx";

function App() {
  return (
    <div>
      <HowItWork />
      <ImpactSection />
      <PackageSection />
    </div>
  );
}

export default App;
