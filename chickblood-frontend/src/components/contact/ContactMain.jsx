import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Matter from "matter-js";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import useFontFamily from "../../hooks/useFontFamily";
import useWindowSize from "../../hooks/useWindowSize";
import HideableDrawer from "../../utils/HideableDrawer";
import LoadingPage from "../../utils/LoadingPage";

// cloudfare images preload
const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2adf6338-6e0a-4ea7-7099-9c591fec2c00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/aad5eaf8-af55-44d3-4eab-6b3bdec2e400/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0df3a57f-37dd-4091-9732-1ce506050a00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f55854c8-1dce-4802-b918-c3f7696a2b00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2afd1f87-473a-4495-1c44-e4051e6ede00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0cde38b6-375b-4bf1-ca26-3c4e783d9800/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/083c031d-4b3c-407f-25bb-c4c431e46b00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9c9e07e5-d08e-4045-3a5e-8d66c0437f00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c76f1e33-cdee-4640-4f38-c33af52ecd00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/109a74c0-26b2-4eeb-5a1e-083d24bea300/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9b0bbe26-a577-41ed-f170-592327bf3800/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5728a3f5-e205-4119-f9f1-252527903100/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a892f4ab-5495-42ad-1efa-441c10677c00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/aadf372c-9f3f-497d-89bc-163a31e4dd00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7981b3fb-f2b0-44a6-0446-63de50639a00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/115b93bb-c2af-44d3-9667-2f57ee7a9500/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c0ae9886-e48e-496f-88f8-a59461f44300/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/e79a3f1a-8140-4caa-c390-5d48819b3400/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/52e14b75-7679-4bfa-545b-cea8c0505800/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/84e4e2db-d7aa-4612-5282-9de4e74e2b00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/ec384392-03ff-4961-8f68-36d73a359000/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/74d4e1a8-4b07-41af-3104-4744ec094c00/public",
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8997cd69-0f3e-4f09-3a86-892abceec900/public",
];

export default function ContactMain() {
  const useFont = useFontFamily();
  const sceneRef = useRef(null);
  const { width, height } = useWindowSize();
  const { themeMode } = useContext(ThemeContext);
  const [openLoader, setOpenLoader] = useState(true);
  // modal states
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  /** Loader states and handle image preload */
  const handleCloseLoader = () => {
    setOpenLoader(false);
  };
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };
  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(imageUrls.map((url) => loadImage(url)));

        setOpenLoader(false);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    preloadImages();
  }, []);
  /**
   * Matter.js components
   */
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
    // const ground = Bodies.rectangle(width / 2, height + 500, width, 1000, {
    //   isStatic: true,
    //   render: { fillStyle: "#060a19" },
    // });

    const leftWall = Bodies.rectangle(-500, height / 2, 1000, height, {
      isStatic: true,
      render: { fillStyle: "#060a19" },
    });

    const rightWall = Bodies.rectangle(width + 500, height / 2, 1000, 1000, {
      isStatic: true,
      render: { fillStyle: "#060a19", border: 1 },
    });

    const roof = Bodies.rectangle(width / 2, -500, width, 1000, {
      isStatic: true,
      render: { fillStyle: "#060a19" },
    });

    // clickable rectangles --------------------------------
    const tiktok = Bodies.rectangle(width / 2 - 250, 0, 50, 50, {
      label: "https://www.instagram.com/chickblooood/",
      restitution: 0.7,
      density: 0.5,
      render: {
        sprite: {
          texture:
            themeMode === "light"
              ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2adf6338-6e0a-4ea7-7099-9c591fec2c00/public"
              : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/aad5eaf8-af55-44d3-4eab-6b3bdec2e400/public",
          xScale: 0.1,
          yScale: 0.1,
        },
      },
    });

    const insta = Bodies.rectangle(width / 2 - 150, 0, 50, 50, {
      label: "https://www.instagram.com/chickblooood/",
      restitution: 0.7,
      density: 0.5,
      render: {
        sprite: {
          texture:
            themeMode === "light"
              ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0df3a57f-37dd-4091-9732-1ce506050a00/public"
              : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f55854c8-1dce-4802-b918-c3f7696a2b00/public",
          xScale: 0.1,
          yScale: 0.1,
        },
      },
    });

    const youtube = Bodies.rectangle(width / 2 - 50, 0, 50, 50, {
      label: "https://www.instagram.com/chickblooood/",
      restitution: 0.7,
      density: 0.5,
      render: {
        sprite: {
          texture:
            themeMode === "light"
              ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2afd1f87-473a-4495-1c44-e4051e6ede00/public"
              : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0cde38b6-375b-4bf1-ca26-3c4e783d9800/public",
          xScale: 0.1,
          yScale: 0.1,
        },
      },
    });
    const twitter = Bodies.rectangle(width / 2 + 50, 0, 50, 50, {
      label: "https://www.instagram.com/chickblooood/",
      restitution: 0.7,
      density: 0.5,
      render: {
        sprite: {
          texture:
            themeMode === "light"
              ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/083c031d-4b3c-407f-25bb-c4c431e46b00/public"
              : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9c9e07e5-d08e-4045-3a5e-8d66c0437f00/public",
          xScale: 0.1,
          yScale: 0.1,
        },
      },
    });
    const discord = Bodies.rectangle(width / 2 + 150, 0, 50, 50, {
      label: "https://www.instagram.com/chickblooood/",
      restitution: 0.7,
      density: 0.5,
      render: {
        sprite: {
          texture:
            themeMode === "light"
              ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c76f1e33-cdee-4640-4f38-c33af52ecd00/public"
              : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/109a74c0-26b2-4eeb-5a1e-083d24bea300/public",
          xScale: 0.1,
          yScale: 0.1,
        },
      },
    });
    const xhs = Bodies.rectangle(width / 2 + 250, 0, 50, 50, {
      label: "https://www.instagram.com/chickblooood/",
      restitution: 0.7,
      density: 0.5,
      render: {
        sprite: {
          texture:
            themeMode === "light"
              ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9b0bbe26-a577-41ed-f170-592327bf3800/public"
              : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5728a3f5-e205-4119-f9f1-252527903100/public",
          xScale: 0.1,
          yScale: 0.1,
        },
      },
    });
    // end clickable rectangles ----------------------------

    // at least calc(15% + 320px) (click to contact's height)
    // is below click to contact, might go out of frame depending on user's height
    const tray = Bodies.rectangle(
      width / 2,
      0.15 * height + 1000,
      width,
      1000,
      {
        label: "no",
        isStatic: true,
        render: { fillStyle: "transparent" },
      }
    );

    const tray_left = Bodies.trapezoid(
      width / 2 - 1050,
      height / 2,
      2000,
      height,
      0.5,
      {
        label: "no",
        isStatic: true,
        render: { fillStyle: "transparent" },
      }
    );

    const tray_right = Bodies.trapezoid(
      width / 2 + 1050,
      height / 2,
      2000,
      height,
      0.5,
      {
        label: "no",
        isStatic: true,
        render: { fillStyle: "transparent" },
      }
    );

    // Add all bodies to the world
    World.add(engine.world, [
      //   ground,
      leftWall,
      rightWall,
      roof,
      tray,
      tray_left,
      tray_right,
    ]);

    World.add(engine.world, [tiktok, insta, youtube, twitter, discord, xhs]);

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

    // handles onclick events to open up the corresponding link
    Matter.Events.on(mouseConstraint, "mousedown", function (event) {
      const mousePosition = event.mouse.position;
      const bodies = Matter.Composite.allBodies(engine.world);

      for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i];
        if (
          body.label &&
          body.label !== "no" &&
          Matter.Bounds.contains(body.bounds, mousePosition)
        ) {
          window.open(body.label, "_blank");
          break;
        }
      }
    });

    // Run the engine
    Matter.Runner.run(engine);

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
  }, [width, height, themeMode]);
  return (
    <div ref={sceneRef} style={{ position: "relative", overflow: "hidden" }}>
      {/* sorry im too lazy for media queries so i decided to come up with this pile of shit */}
      {/* background and other decor assets */}
      {/* contact page background (notepad) */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c0ae9886-e48e-496f-88f8-a59461f44300/public"
        alt="contact bg"
        height={height + 20}
        width={width}
        style={{ position: "absolute", zIndex: -100 }}
      ></img>
      {width > 900 && (
        <div>
          {/* contact decors----------------------------- */}
          {height > 600 && (
            <div>
              {/* upper left */}
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/74d4e1a8-4b07-41af-3104-4744ec094c00/public"
                alt="contact bg"
                width={width / 3}
                style={{ position: "absolute", zIndex: -100 }}
              ></img>

              {/* upper right */}
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/52e14b75-7679-4bfa-545b-cea8c0505800/public"
                alt="contact bg"
                width={width / 3}
                style={{ position: "absolute", zIndex: -100, right: 0 }}
              ></img>
            </div>
          )}
          {/* webdesigner: left */}
          <img
            src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/ec384392-03ff-4961-8f68-36d73a359000/public"
            alt="contact bg"
            width={width / 4}
            style={{ position: "absolute", zIndex: -100, top: "35%" }}
          ></img>
          {height > 600 && (
            <div>
              {/* bottomright */}
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/02ee5a4d-8771-4247-e150-a0f77807a700/public"
                alt="contact bg"
                width={width / 3}
                style={{
                  position: "absolute",
                  zIndex: -100,
                  right: 0,
                  bottom: 0,
                }}
              ></img>
              {/* bottomleft */}
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8997cd69-0f3e-4f09-3a86-892abceec900/public"
                alt="contact bg"
                width={width / 5}
                style={{ position: "absolute", zIndex: -100, bottom: 0 }}
              ></img>
            </div>
          )}
          {height > 700 && (
            <div>
              {/* webdeveloper: bottom */}
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/84e4e2db-d7aa-4612-5282-9de4e74e2b00/public"
                alt="contact bg"
                width={width / 3}
                style={{
                  position: "absolute",
                  zIndex: -100,
                  bottom: 0,
                  left: width / 4,
                }}
              ></img>
            </div>
          )}

          {/* art director: right */}
          <img
            src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/e79a3f1a-8140-4caa-c390-5d48819b3400/public"
            alt="contact bg"
            width={width / 5}
            style={{
              position: "absolute",
              zIndex: -100,
              top: "35%",
              right: 0,
            }}
          ></img>
        </div>
      )}
      {/* end contact decors----------------------------- */}

      {/* Loading Page */}
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
      {/* Drawer Button */}
      <Box
        position="absolute"
        sx={{ marginLeft: "1%", marginTop: "1%", zIndex: 1000 }}
      >
        <HideableDrawer />
      </Box>
      {/* Icon picture */}
      <Box sx={{ position: "absolute", left: "calc(50% - 250px)" }}>
        <motion.div whileHover={{ scale: 1.1 }} onClick={handleOpenModal}>
          <img
            src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a892f4ab-5495-42ad-1efa-441c10677c00/public"
            alt="blog icon"
            style={{
              width: "500px",
              height: "500px",
            }}
          ></img>
        </motion.div>
      </Box>
      {/* Click to contact */}
      <Box
        sx={{
          position: "absolute",
          top: "calc(15% + 320px)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* This Box is for clicking and open the email sender */}
        <Box p={2}>
          <Typography sx={{ fontFamily: useFont.bold, fontSize: 25 }}>
            Click to Contact
          </Typography>
        </Box>
      </Box>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openModal}
          onClose={handleCloseModal}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openModal}>
            <Box sx={ModalStyle}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
