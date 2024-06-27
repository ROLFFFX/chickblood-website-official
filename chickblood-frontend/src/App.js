import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Story from "./components/Story";
import "./translation/i18n";
import Playground from "./beta/Playground";
import CustomCursor from "./utils/CustomCursor";
import "./App.css";
import useFontFamily from "./hooks/useFontFamily";
import ThemeProvider from "./context/ThemeProvider";
import Blog from "./components/blog/Blog";
import Issue1 from "./components/blog/issues/Issue1";
import FallingTest from "./beta/FallingTest";
import MemberPage from "./components/member/MemberPage";
import ContactPage from "./components/contact/ContactPage";
import Test from "./beta/Test";

function Layout({ children }) {
  return (
    <>
      <CustomCursor></CustomCursor>
      <Outlet></Outlet>
    </>
  );
}

function App() {
  useFontFamily();
  return (
    <React.Fragment>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/story" element={<Story />} />
            <Route path="/member" element={<MemberPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="/playground" element={<Playground />} />
          <Route path="/falling" element={<FallingTest />} />
          <Route path="/blog/issue1" element={<Issue1 />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
