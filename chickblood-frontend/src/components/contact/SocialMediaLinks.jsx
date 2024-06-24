import Matter from "matter-js";
import { React, useEffect, useRef, useState } from "react";

export default function SocialMediaLinks() {
  const sceneRef = useRef(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    // Module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies;

    // Create engine
    const engine = Engine.create();

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframeBackground: "transparent",
        background: "transparent",
        wireframes: false,
      },
    });

    // Create walls and roof
    const ground = Bodies.rectangle(width / 2, height + 500, width, 1000, {
      isStatic: true,
      render: { fillStyle: "#060a19" },
    });

    const leftWall = Bodies.rectangle(-500, height / 2, 1000, height, {
      isStatic: true,
      render: { fillStyle: "#060a19" },
    });

    const rightWall = Bodies.rectangle(
      width / 2 + 500,
      height / 2,
      1000,
      height,
      {
        isStatic: true,
        render: { fillStyle: "transparent", border: 1 },
      }
    );

    const roof = Bodies.rectangle(width / 2, -500, width, 1000, {
      isStatic: true,
      render: { fillStyle: "#060a19" },
    });

    // contact Icon
    const contactIcon = Matter.Bodies.circle(0, height, height / 2, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
      },
    });

    // Create ball
    const ball = Bodies.circle(width / 2 - 1, 100, 60, {
      restitution: 0.7,
      density: 0.5,
      render: { fillStyle: "#ff5722" },
    });

    // credit section - semicircle
    const creditSection = Matter.Bodies.circle(
      width / 2,
      height / 2,
      height / 4,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      }
    );

    // Add all bodies to the world
    World.add(engine.world, [
      ground,
      leftWall,
      rightWall,
      roof,
      ball,
      contactIcon,
      creditSection,
    ]);

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

    // Run the engine
    Engine.run(engine);

    // Run the renderer
    Render.run(render);

    // Cleanup
    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      Matter.World.clear(engine.world);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, [width, height]);

  return (
    <div ref={sceneRef} style={{ position: "relative", overflow: "hidden" }}>
      <CreditBox></CreditBox>
      <ContactIconBox></ContactIconBox>
    </div>
  );
}

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

const CreditBox = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "100%",
    width: "50vh",
    height: "50vh",
    border: "0.4px solid black",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: -1,
  };

  return <div style={style}></div>;
};

const ContactIconBox = () => {
  const style = {
    width: "50.5vh",
    height: "50.5vh",
    position: "absolute",
    bottom: "0",
    left: "0",
    borderTopRightRadius: "50.5vh",
    border: "0.4px solid black",
  };

  return <div style={style}></div>;
};
