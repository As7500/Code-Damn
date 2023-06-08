import React from "react";
import { Routes, Route } from "react-router-dom";

import Plane from "./Containers/full/plane";
import Portfolio from "./Containers/Project/Portfolio";
import Profi  from "./Containers/Profile/Profi";
import Social from "./Containers/Socials/social";
import Resume from "./Containers/Resume/resume";
function App() {
  return (
    <Routes>
      <Route path="/plane" element={<Plane />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/Profile" element={<Profi />} />
      <Route path="/social" element={<Social />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
