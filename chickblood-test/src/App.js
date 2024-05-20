import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Story from "./components/Story";

function Layout({ children }) {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/story" element={<Story />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
