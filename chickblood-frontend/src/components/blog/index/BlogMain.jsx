import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import BlogMobile from "./BlogMobile";
import BlogDesktop from "./BlogDesktop";

export default function BlogMain() {
  const { width } = useWindowSize();
  console.log(width);
  if (width < 500) return <BlogMobile></BlogMobile>;
  return (
    <div>
      <BlogDesktop></BlogDesktop>
    </div>
  );
}
