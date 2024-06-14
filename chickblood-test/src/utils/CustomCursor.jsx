import { throttle } from "lodash";
import React, { useEffect, useRef } from "react";
import "../App.css";

export default function CustomCursor({ size = 128 }) {
  const [isHoveringClickable, setIsHoveringClickable] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const positionRef = useRef({ x: 0, y: 0 });
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
    };

    const handleWindowBlur = () => {
      setIsVisible(false);
    };

    const handleMouseClick = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, true);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("click", handleMouseClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("click", handleMouseClick);
    };
  }, []);

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
            transform: "translate(-50%, -40%)",
            zIndex: 1400,
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      )}
      <audio ref={audioRef} src="/sound/mouseClick.wav" preload="auto" />
    </div>
  );
}
