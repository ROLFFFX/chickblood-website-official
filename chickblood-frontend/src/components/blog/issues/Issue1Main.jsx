import React from "react";
import Issue1Desktop from "./Issue1Desktop";
import useWindowSize from "../../../hooks/useWindowSize";
import Issue1Mobile from "./Issue1Mobile";

export default function Issue1Main() {
  const { width } = useWindowSize();
  console.log(width);
  if (width < 500) return <Issue1Mobile></Issue1Mobile>;
  return (
    <div>
      <Issue1Desktop></Issue1Desktop>
    </div>
  );
}
