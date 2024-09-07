import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoadingPage from "../../../utils/LoadingPage";
import { useNavigate } from "react-router-dom";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f5d051d1-dce7-4d22-2be1-d4edb587d500/public", //1
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2c0d0444-bd69-454b-4f39-95f5e6389100/public", //2
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2fafd9df-59db-4702-fc27-f508e4e78500/public", //3
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/ee0cfdf0-643d-4bc1-d3c7-21b75f47e600/public", //4
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/593ce91a-cac9-4286-fe45-8f541aaa8e00/public", //5
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/db78968f-cef7-457b-2562-8ac0c08ba000/public", //6
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2d8eec05-60dc-4286-fb91-762690c8f000/public", //7
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/ae3e72f7-5a30-4783-a164-077470728400/public", //8
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/494891cc-13fe-4092-6be8-d4b5d7a91f00/public", //9
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/88faf6f2-4ebb-4efa-6d27-4d33c47ad900/public", //10
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8b4cc9d4-9615-4ec1-fe83-497baa938700/public", //11
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/d7143b51-8f56-4cad-1f32-365dc3f26a00/public", //12
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7378e9d1-5587-4830-07dd-436023d26700/public", //13
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9839ef1f-f453-4e1c-6050-6cab4138dd00/public", //14
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/52821144-b583-4e2b-61ba-e93631daef00/public", //15
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/92262acc-b131-435b-7e47-9cd590a14900/public", //16
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/041da201-95d2-417e-4947-f704603c7600/public", //page01
];

export default function PageOneMobile() {
  const navigate = useNavigate();
  // Image preload
  const [openLoader, setOpenLoader] = useState(true);
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

  // Glitch effect
  const glitchAnimation = `
    @keyframes glitch {
      0% { opacity: 1; }
      20% { opacity: 0; }
      40% { opacity: 1; }
      60% { opacity: 0; }
      80% { opacity: 1; }
      100% { opacity: 1; }
    }
  `;
  const handleMouseEnter = (e) => {
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.innerHTML = glitchAnimation;
    document.head.appendChild(styleElement);

    e.target.style.animation = "glitch 0.1s infinite";
  };
  const handleMouseLeave = (e) => {
    e.target.style.animation = "none";
  };

  return (
    <Box sx={{ position: "relative", height: "500px", width: "auto" }}>
      {/* Loading Page */}
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>

      {/* Background Image */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/041da201-95d2-417e-4947-f704603c7600/public"
        alt="page one bg"
        style={{
          height: "500px",
          width: "auto",
          display: "block",
        }}
      />

      {/* Adjusted Positions for Smaller Images (5/6 Scaling) */}
      {/* 16 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/92262acc-b131-435b-7e47-9cd590a14900/public"
        alt="16"
        style={{
          position: "absolute",
          top: `${(170 * 5) / 6}px`, // 170px * 5/6
          left: `${(15 * 5) / 6}px`, // 15px * 5/6
          height: `${(60 * 5) / 6}px`, // 60px * 5/6
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 15 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/52821144-b583-4e2b-61ba-e93631daef00/public"
        alt="15"
        style={{
          position: "absolute",
          top: `${(170 * 5) / 6}px`,
          left: `${(145 * 5) / 6}px`, // 145px * 5/6
          height: `${(60 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 14 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9839ef1f-f453-4e1c-6050-6cab4138dd00/public"
        alt="14"
        style={{
          position: "absolute",
          top: `${(170 * 5) / 6}px`,
          left: `${(265 * 5) / 6}px`, // 265px * 5/6
          height: `${(60 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 13 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7378e9d1-5587-4830-07dd-436023d26700/public"
        alt="13"
        style={{
          position: "absolute",
          top: `${(170 * 5) / 6}px`,
          left: `${(340 * 5) / 6}px`, // 340px * 5/6
          height: `${(155 * 5) / 6}px`, // 155px * 5/6
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 12 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/d7143b51-8f56-4cad-1f32-365dc3f26a00/public"
        alt="12"
        style={{
          position: "absolute",
          top: `${(240 * 5) / 6}px`, // 240px * 5/6
          left: `${(30 * 5) / 6}px`, // 30px * 5/6
          height: `${(70 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 11 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8b4cc9d4-9615-4ec1-fe83-497baa938700/public"
        alt="11"
        style={{
          position: "absolute",
          top: `${(230 * 5) / 6}px`, // 230px * 5/6
          left: `${(120 * 5) / 6}px`, // 120px * 5/6
          height: `${(85 * 5) / 6}px`, // 85px * 5/6
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 10 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/88faf6f2-4ebb-4efa-6d27-4d33c47ad900/public"
        alt="10"
        style={{
          position: "absolute",
          top: `${(241 * 5) / 6}px`, // 241px * 5/6
          left: `${(250 * 5) / 6}px`, // 250px * 5/6
          height: `${(70 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 9 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/494891cc-13fe-4092-6be8-d4b5d7a91f00/public"
        alt="9"
        style={{
          position: "absolute",
          top: `${(310 * 5) / 6}px`, // 310px * 5/6
          left: `${(20 * 5) / 6}px`, // 20px * 5/6
          height: `${(40 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 8 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/ae3e72f7-5a30-4783-a164-077470728400/public"
        alt="8"
        style={{
          position: "absolute",
          top: `${(355 * 5) / 6}px`, // 355px * 5/6
          left: `${(20 * 5) / 6}px`,
          height: `${(40 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 7 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2d8eec05-60dc-4286-fb91-762690c8f000/public"
        alt="7"
        style={{
          position: "absolute",
          top: `${(400 * 5) / 6}px`, // 400px * 5/6
          left: `${(20 * 5) / 6}px`,
          height: `${(40 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 6 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/db78968f-cef7-457b-2562-8ac0c08ba000/public"
        alt="6"
        style={{
          position: "absolute",
          top: `${(305 * 5) / 6}px`, // 305px * 5/6
          left: `${(185 * 5) / 6}px`, // 185px * 5/6
          height: `${(160 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 5 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/593ce91a-cac9-4286-fe45-8f541aaa8e00/public"
        alt="5"
        style={{
          position: "absolute",
          top: `${(315 * 5) / 6}px`, // 315px * 5/6
          left: `${(260 * 5) / 6}px`, // 260px * 5/6
          height: `${(100 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 4 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/ee0cfdf0-643d-4bc1-d3c7-21b75f47e600/public"
        alt="4"
        style={{
          position: "absolute",
          top: `${(400 * 5) / 6}px`, // 400px * 5/6
          left: `${(265 * 5) / 6}px`, // 265px * 5/6
          height: `${(65 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 3 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2fafd9df-59db-4702-fc27-f508e4e78500/public"
        alt="3"
        style={{
          position: "absolute",
          top: `${(445 * 5) / 6}px`, // 445px * 5/6
          left: `${(20 * 5) / 6}px`, // 20px * 5/6
          height: `${(80 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* 2 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/2c0d0444-bd69-454b-4f39-95f5e6389100/public"
        alt="2"
        style={{
          position: "absolute",
          top: `${(455 * 5) / 6}px`, // 455px * 5/6
          left: `${(125 * 5) / 6}px`, // 125px * 5/6
          height: `${(90 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          navigate("/thatsmypo");
        }}
      />

      {/* 1 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/f5d051d1-dce7-4d22-2be1-d4edb587d500/public"
        alt="1"
        style={{
          position: "absolute",
          top: `${(450 * 5) / 6}px`, // 450px * 5/6
          left: `${(250 * 5) / 6}px`, // 250px * 5/6
          height: `${(100 * 5) / 6}px`,
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          navigate("/dayone");
        }}
      />
    </Box>
  );
}
