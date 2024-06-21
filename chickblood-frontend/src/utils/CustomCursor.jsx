import { throttle } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import "../App.css";

export default function CustomCursor({ size = 128 }) {
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const positionRef = useRef(null);
  const cursorRef = useRef(null);
  const audioRef = useRef(null);

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

    const handleMouseClick = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("click", handleMouseClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("click", handleMouseClick);
    };
  }, [size]);

  return (
    <div
      className="custom-cursor-container"
      style={{ position: "absolute", pointerEvents: "none", left: 0, top: 0 }}
    >
      {isVisible && (
        <img
          ref={cursorRef}
          src={
            isHoveringClickable
              ? "/pics/cursors/custom-cursor-ms2.png"
              : "/pics/cursors/custom-cursor-ms1.png"
          }
          alt="Custom Cursor"
          style={{
            position: "absolute",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            zIndex: 1400,
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      )}
      <audio ref={audioRef} src="/sound/mouseClick4.mp3" preload="auto" />
    </div>
  );
}
