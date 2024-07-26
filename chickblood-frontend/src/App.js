import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import FallingTest from "./beta/FallingTest";
import Playground from "./beta/Playground";
import Test from "./beta/Test";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import BlogMain from "./components/blog/index/BlogMain";
import Issue1Main from "./components/blog/issues/Issue1Main";
import ContactMain from "./components/contact/ContactMain";
import MemberPage from "./components/member/MemberPage";
import ThemeProvider from "./context/ThemeProvider";
import useFontFamily from "./hooks/useFontFamily";
import "./translation/i18n";
import CustomCursor from "./utils/CustomCursor";
import ContactPage from "./components/contact/ContactPage";
import EventHome from "./components/events/EventHome";

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
            <Route path="/home" element={<HomePage />} />
            <Route path="/member" element={<MemberPage />} />
            <Route path="/blog" element={<BlogMain />} />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/eventhome" element={<EventHome />} />
            <Route path="/contactold" element={<ContactPage />} />
          </Route>
          <Route path="/playground" element={<Playground />} />
          <Route path="/falling" element={<FallingTest />} />
          <Route path="/blog/issue1" element={<Issue1Main />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
