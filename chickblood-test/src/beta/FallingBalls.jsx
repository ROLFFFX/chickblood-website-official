import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import CustomCursor from "../utils/CustomCursor";

const FallingBalls = () => {
  const sceneRef = useRef(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const engine = Matter.Engine.create({ gravity: { x: 0, y: 0 } });
    const render = Matter.Render.create({
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

    const center = Matter.Bodies.circle(width / 2, height / 2, 130, {
      isStatic: true,
      render: {
        fillStyle: "#8ecae6",
        sprite: {
          // texture: "pics/icons/blog_icon.png",
          // xScale: 0.06,
          // yScale: 0.06,
        },
      },
    });

    // Math.random() * (width - 0 + 1) gives a random number in screen width
    const issue1 = Matter.Bodies.circle(
      Math.random() * (width - 0 + 1),
      80,
      80,
      {
        restitution: 0.8,
        render: {
          sprite: {
            // texture: "pics/cbicon_blk.png",
            xScale: 0.05,
            yScale: 0.05,
          },
        },
      }
    );

    const issue2 = Matter.Bodies.circle(
      Math.random() * (width - 0 + 1),
      80,
      80,
      {
        restitution: 0.8,
        render: {
          sprite: {
            // texture: "pics/cbicon_red.png",
            xScale: 0.05,
            yScale: 0.05,
          },
        },
      }
    );

    // add slight angular velocity to issue 1 and issue 2. Angular velocity is randomized but limited to 0.05
    const generateRandomAngularVelocity = () => {
      const maxAngularVelocity = 0.05;
      return (Math.random() * 2 - 1) * maxAngularVelocity;
    };
    // set the angular velocity
    Matter.Body.setAngularVelocity(issue1, generateRandomAngularVelocity());
    Matter.Body.setAngularVelocity(issue2, generateRandomAngularVelocity());

    const roof = Matter.Bodies.rectangle(width / 2, 0, width, 1, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
    });
    const ground = Matter.Bodies.rectangle(width / 2, height, width, 1, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
    });
    const leftWall = Matter.Bodies.rectangle(0, height / 2, 1, height, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
    });
    const rightWall = Matter.Bodies.rectangle(width, height / 2, 1, height, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
    });

    Matter.World.add(engine.world, [
      issue1,
      issue2,
      ground,
      leftWall,
      rightWall,
      roof,
      center,
    ]);

    //gravity
    const centerX = width / 2;
    const centerY = height / 2;
    const gravityStrength = 5; //0.0005
    console.log(centerX);
    console.log(centerY);
    Matter.Events.on(engine, "afterUpdate", () => {
      Matter.Composite.allBodies(engine.world).forEach((body) => {
        if (!body.isStatic) {
          const dx = centerX - body.position.x;
          const dy = centerY - body.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceMagnitude = gravityStrength / (distance * distance);
          const force = {
            x: forceMagnitude * dx,
            y: forceMagnitude * dy,
          };
          Matter.Body.applyForce(body, body.position, force);
        }
      });
    });

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

    Matter.Runner.run(engine);
    Matter.Render.run(render);

    render.canvas.addEventListener("mousedown", (event) => {
      const bounds = issue1.bounds;
      const mouseX = event.clientX - render.canvas.getBoundingClientRect().left;
      const mouseY = event.clientY - render.canvas.getBoundingClientRect().top;
      if (
        mouseX > bounds.min.x &&
        mouseX < bounds.max.x &&
        mouseY > bounds.min.y &&
        mouseY < bounds.max.y
      ) {
        // onClick of issue1 goes here
        // alert("issue1 clicked!");
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
