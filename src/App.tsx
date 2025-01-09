import { Routes, Route } from "react-router-dom";
import BGCHome from "./screens/bgc";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.location.href = "/bgc";
  }, []);

  return <h1>Home Page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bgc" element={<BGCHome />} />
    </Routes>
  );
}

export default App;
