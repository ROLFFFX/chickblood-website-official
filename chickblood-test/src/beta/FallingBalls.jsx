import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import CustomCursor from "../utils/CustomCursor";

const FallingBalls = () => {
  const sceneRef = useRef(null);
  const { width, height } = useWindowSize();
  // const [ball, setBall] = useState(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframeBackground: "transparent",
        background: "transparent",
      },
    });

    const ball = Matter.Bodies.circle(0, 100, 100, { restitution: 0.8 });
    // setBall(ball);

    const roof = Matter.Bodies.rectangle(width / 2, 0, width, 1, {
      isStatic: true,
    });
    const ground = Matter.Bodies.rectangle(width / 2, height, width, 1, {
      isStatic: true,
    });
    const leftWall = Matter.Bodies.rectangle(0, height / 2, 1, height, {
      isStatic: true,
    });
    const rightWall = Matter.Bodies.rectangle(width, height / 2, 1, height, {
      isStatic: true,
    });

    Matter.World.add(engine.world, [ball, ground, leftWall, rightWall, roof]);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: {
          visible: true,
        },
      },
    });
    Matter.World.add(engine.world, mouseConstraint);

    Matter.Engine.run(engine);
    Matter.Render.run(render);

    render.canvas.addEventListener("mousedown", (event) => {
      const bounds = ball.bounds;
      const mouseX = event.clientX - render.canvas.getBoundingClientRect().left;
      const mouseY = event.clientY - render.canvas.getBoundingClientRect().top;
      if (
        mouseX > bounds.min.x &&
        mouseX < bounds.max.x &&
        mouseY > bounds.min.y &&
        mouseY < bounds.max.y
      ) {
        // alert("Ball clicked!");
      }
    });

    return () => {
      Matter.Engine.clear(engine);
      Matter.Render.stop(render);
      render.canvas.remove();
    };
  }, [width, height]);

  return (
    <div ref={sceneRef}>
      <CustomCursor></CustomCursor>
    </div>
  );
};

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default FallingBalls;
