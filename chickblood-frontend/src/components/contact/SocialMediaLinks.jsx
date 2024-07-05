import { Box, Typography } from "@mui/material";
import Matter from "matter-js";
import { React, useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeProvider";
import useFontFamily from "../../hooks/useFontFamily";
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
];

export default function SocialMediaLinks() {
  const sceneRef = useRef(null);
  const { width, height } = useWindowSize();
  const { themeMode } = useContext(ThemeContext);
  const [openLoader, setOpenLoader] = useState(true);
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
      (2 / 3) * width + 501,
      height / 2,
      1000,
      1000,
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

    //1223040

    // clickable rectangles --------------------------------
    const tiktok = Bodies.rectangle(
      width / 2 - 1,
      0,
      100 * (width / 1470),
      100 * (width / 1470),
      {
        restitution: 0.7,
        density: 0.5,
        render: {
          sprite: {
            texture:
              themeMode === "light"
                ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2adf6338-6e0a-4ea7-7099-9c591fec2c00/public"
                : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/aad5eaf8-af55-44d3-4eab-6b3bdec2e400/public",
            xScale: 0.2 * (width / 1470),
            yScale: 0.2 * (width / 1470),
          },
        },
      }
    );

    const insta = Bodies.rectangle(
      width / 2 - 1,
      0,
      100 * (width / 1470),
      100 * (width / 1470),
      {
        restitution: 0.7,
        density: 0.5,
        render: {
          sprite: {
            texture:
              themeMode === "light"
                ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0df3a57f-37dd-4091-9732-1ce506050a00/public"
                : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f55854c8-1dce-4802-b918-c3f7696a2b00/public",
            xScale: 0.2 * (width / 1470),
            yScale: 0.2 * (width / 1470),
          },
        },
      }
    );

    const youtube = Bodies.rectangle(
      width / 2 - 1,
      0,
      100 * (width / 1470),
      100 * (width / 1470),
      {
        restitution: 0.7,
        density: 0.5,
        render: {
          sprite: {
            texture:
              themeMode === "light"
                ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2afd1f87-473a-4495-1c44-e4051e6ede00/public"
                : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0cde38b6-375b-4bf1-ca26-3c4e783d9800/public",
            xScale: 0.2 * (width / 1470),
            yScale: 0.2 * (width / 1470),
          },
        },
      }
    );
    const twitter = Bodies.rectangle(
      width / 2 - 1,
      0,
      100 * (width / 1470),
      100 * (width / 1470),
      {
        restitution: 0.7,
        density: 0.5,
        render: {
          sprite: {
            texture:
              themeMode === "light"
                ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/083c031d-4b3c-407f-25bb-c4c431e46b00/public"
                : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9c9e07e5-d08e-4045-3a5e-8d66c0437f00/public",
            xScale: 0.2 * (width / 1470),
            yScale: 0.2 * (width / 1470),
          },
        },
      }
    );
    const discord = Bodies.rectangle(
      width / 2 - 1,
      0,
      100 * (width / 1470),
      100 * (width / 1470),
      {
        restitution: 0.7,
        density: 0.5,
        render: {
          sprite: {
            texture:
              themeMode === "light"
                ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c76f1e33-cdee-4640-4f38-c33af52ecd00/public"
                : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/109a74c0-26b2-4eeb-5a1e-083d24bea300/public",
            xScale: 0.2 * (width / 1470),
            yScale: 0.2 * (width / 1470),
          },
        },
      }
    );
    const xhs = Bodies.rectangle(
      width / 2 - 1,
      0,
      100 * (width / 1470),
      100 * (width / 1470),
      {
        restitution: 0.7,
        density: 0.5,
        render: {
          sprite: {
            texture:
              themeMode === "light"
                ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9b0bbe26-a577-41ed-f170-592327bf3800/public"
                : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5728a3f5-e205-4119-f9f1-252527903100/public",
            xScale: 0.2 * (width / 1470),
            yScale: 0.2 * (width / 1470),
          },
        },
      }
    );
    // end clickable rectangles ----------------------------

    // credit section - semicircle
    const creditSection = Matter.Bodies.circle(
      (2 / 3) * width,
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
      contactIcon,
      creditSection,
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
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>

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
  const { themeMode } = useContext(ThemeContext);
  return (
    <Box
      sx={{
        position: "absolute",
        height: "50vh",
        right: "0vw",
        top: "25vh",
      }}
    >
      <img
        src={
          themeMode === "light"
            ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7981b3fb-f2b0-44a6-0446-63de50639a00/public"
            : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/115b93bb-c2af-44d3-9667-2f57ee7a9500/public"
        }
        style={{ height: "100%" }}
        alt="credit box"
      ></img>
    </Box>
  );
};

// Contact Section - Bottom Left Corner
const ContactIconBox = () => {
  const { themeMode } = useContext(ThemeContext);
  const useFont = useFontFamily();
  const { height } = useWindowSize();
  const { t } = useTranslation();
  const style = {
    width: "50.5vh",
    height: "50.5vh",
    position: "absolute",
    bottom: "0",
    left: "-1px",
    // borderTopRightRadius: "50.5vh",
    // border: themeMode === "light" ? "1px solid black" : "0.4px solid white",
    // backgroundColor: themeMode === "light" ? "#FFFFFF" : "#222222",
  };
  function getImgSource(themeMode) {
    return themeMode === "light"
      ? "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a892f4ab-5495-42ad-1efa-441c10677c00/public"
      : "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/aadf372c-9f3f-497d-89bc-163a31e4dd00/public";
  }
  function getFontSize(height) {
    if (height < 500) {
      return "20px";
    } else if (height < 600) {
      return "30px";
    }
    return "35px";
  }

  return (
    <div style={style}>
      <Box
        sx={{
          height: "60%",
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontFamily: useFont.bold, fontSize: getFontSize(height) }}
        >
          {t("contactTitle")}
        </Typography>
      </Box>
      <img
        src={getImgSource(themeMode)}
        alt="blog icon"
        style={{
          width: "40vh",
          height: "40vh",
          bottom: "-5vh",
          position: "absolute",
          left: 0,
        }}
      ></img>
      <Box
        sx={{
          width: "60vh",
          height: "60vh",
          bottom: 0,
          position: "absolute",
          left: 0,
          zIndex: -2,
        }}
      >
        <img
          src="pics/icons/contactBoxIcon.png"
          alt="blog icon"
          style={{ height: "100%", width: "100%" }}
        ></img>
      </Box>
    </div>
  );
};
