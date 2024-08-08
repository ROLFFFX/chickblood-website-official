import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import GenerationalBruise from "./components/blog/generationalBruise/GenerationalBruise";
import BlogMain from "./components/blog/index/BlogMain";
import ContactMain from "./components/contact/ContactMain";
import EventHome from "./components/events/EventHome";
import MemberPage from "./components/member/MemberPage";
import "./translation/i18n";
import CustomCursor from "./utils/CustomCursor";
import { Box } from "@mui/material";
import LandingPage from "./components/LandingPage";

function Layout({ children }) {
  return (
    <Box sx={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <CustomCursor></CustomCursor>
      <Outlet></Outlet>
    </Box>
  );
}
export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />

          <Route path="/member" element={<MemberPage />} />
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/contact" element={<ContactMain />} />
          <Route path="/eventhome" element={<EventHome />} />
          <Route path="/blog/genbruise" element={<GenerationalBruise />} />
        </Route>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
}
