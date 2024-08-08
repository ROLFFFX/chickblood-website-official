import { throttle } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import "../App.css";

export default function CustomCursor({ size = 128 }) {
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const positionRef = useRef({ x: -size, y: -size });
  const cursorRef = useRef(null);

  const updateCursorPos = (x, y) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
    }
  };

  useEffect(() => {
    const handleMouseMove = throttle((event) => {
      const newPos = { x: event.clientX, y: event.clientY };
      positionRef.current = newPos;
      updateCursorPos(newPos.x, newPos.y);
      setIsVisible(true);
    }, 16);

    const handleScroll = throttle(() => {
      updateCursorPos(positionRef.current.x, positionRef.current.y);
    }, 16);

    const handleMouseOver = (event) => {
      if (event.target.closest("a, button, [role='button'], .clickable")) {
        setIsHoveringClickable(true);
      }
    };

    const handleMouseOut = (event) => {
      if (event.target.closest("a, button, [role='button'], .clickable")) {
        setIsHoveringClickable(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      positionRef.current = { x: -size, y: -size };
      updateCursorPos(positionRef.current.x, positionRef.current.y);
    };

    const handleWindowBlur = () => {
      setIsVisible(false);
      positionRef.current = { x: -size, y: -size };
      updateCursorPos(positionRef.current.x, positionRef.current.y);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [size]);

  function imageSource(isHoveringClickable) {
    return isHoveringClickable
      ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6c2f2546-6e4b-4ca6-a5bc-b4630c953900/public"
      : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/07e065d3-01ba-41e1-f323-baa66d10ba00/public";
  }

  return (
    <div
      className="custom-cursor-container"
      style={{ position: "absolute", pointerEvents: "none", left: 0, top: 0 }}
    >
      {isVisible && (
        <img
          ref={cursorRef}
          src={imageSource(isHoveringClickable)}
          alt="Custom Cursor"
          style={{
            position: "absolute",
            pointerEvents: "none",
            transform: "translate(-50%, -40%)",
            zIndex: 1400,
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      )}
    </div>
  );
}
