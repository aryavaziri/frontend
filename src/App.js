import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import HomeScreen from "./HomeScreen";

// const hostname = window.location.hostname + ":8000";

export default function App() {
  const [dep, setdep] = useState(0);
  return (
    <Router>
      {/* <Header /> */}
      <main className="">
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}
