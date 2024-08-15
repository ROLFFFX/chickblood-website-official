import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoadingPage from "../../../utils/LoadingPage";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/11dfe8e5-83df-455a-6e37-8ea75a45b100/public", //17
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/70925860-005f-4fdc-7a2a-545fee452500/public", //18
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/e964609d-cbc8-4c00-b03b-9ebaa00c1100/public", //19
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/90266000-5450-40cc-6a83-67d8df48e200/public", //20
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/66895882-0251-4804-49fe-44dfcd21ce00/public", //21
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c2e385d9-b942-485c-2414-1569df2a7b00/public", //22
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8c59f196-a627-416a-7560-f4d291cad500/public", //23
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/50a06b79-dc86-44e6-c39a-343b27925c00/public", //24
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9414ec65-9715-421f-ebca-386cb8dda300/public", //25
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/32e60221-4963-4c1c-d846-91035e10da00/public", //26
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6683ecfd-0007-4bbe-434a-01e616dc9d00/public", //27
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5a91ac82-ff96-4837-56b5-ce31b387f500/public", //28
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/db5b9ad2-060e-4df5-db0b-63015c8c8200/public", //29
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/884dae8b-bd22-4641-5dde-01a053724c00/public", //30
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7db9d271-ed74-4d66-21dc-491b54ce6100/public", //31
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/04ab2540-0b12-4acc-6cf2-3cbc17a74100/public", //page 02
];

export default function PageTwo() {
  // glitch effect
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
  // image preload
  const [openLoader, setOpenLoader] = useState(true);
  const handleCloseLoader = () => {
    setOpenLoader(false);
  };
  // const handleOpenLoader = () => {
  //   setOpenLoader(true);
  // };
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

  return (
    <Box sx={{ position: "relative", height: "600px", width: "auto" }}>
      {/* Loading Page */}
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
      {/* background image */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/04ab2540-0b12-4acc-6cf2-3cbc17a74100/public"
        alt="page two bg"
        style={{
          height: "600px",
          width: "auto",
          display: "block",
        }}
      />
      {/* 31 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7db9d271-ed74-4d66-21dc-491b54ce6100/public"
        alt="31"
        style={{
          position: "absolute",
          top: "170px",
          left: "15px",
          height: "150px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 30 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/884dae8b-bd22-4641-5dde-01a053724c00/public"
        alt="30"
        style={{
          position: "absolute",
          top: "170px",
          left: "80px",
          height: "80px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 29 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/db5b9ad2-060e-4df5-db0b-63015c8c8200/public"
        alt="29"
        style={{
          position: "absolute",
          top: "170px",
          left: "220px",
          height: "70px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 28 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/5a91ac82-ff96-4837-56b5-ce31b387f500/public"
        alt="28"
        style={{
          position: "absolute",
          top: "167px",
          left: "300px",
          height: "90px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 27 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6683ecfd-0007-4bbe-434a-01e616dc9d00/public"
        alt="27"
        style={{
          position: "absolute",
          top: "245px",
          left: "80px",
          height: "90px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 26 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/32e60221-4963-4c1c-d846-91035e10da00/public"
        alt="26"
        style={{
          position: "absolute",
          top: "258px",
          left: "180px",
          height: "60px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 25 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/9414ec65-9715-421f-ebca-386cb8dda300/public"
        alt="25"
        style={{
          position: "absolute",
          top: "238px",
          left: "270px",
          height: "95px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 24 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/50a06b79-dc86-44e6-c39a-343b27925c00/public"
        alt="24"
        style={{
          position: "absolute",
          top: "320px",
          left: "15px",
          height: "95px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 23 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/8c59f196-a627-416a-7560-f4d291cad500/public"
        alt="23"
        style={{
          position: "absolute",
          top: "390px",
          left: "10px",
          height: "95px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 22 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/c2e385d9-b942-485c-2414-1569df2a7b00/public"
        alt="22"
        style={{
          position: "absolute",
          top: "470px",
          left: "15px",
          height: "60px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 21 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/66895882-0251-4804-49fe-44dfcd21ce00/public"
        alt="21"
        style={{
          position: "absolute",
          top: "330px",
          left: "155px",
          height: "160px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 20 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/90266000-5450-40cc-6a83-67d8df48e200/public"
        alt="20"
        style={{
          position: "absolute",
          top: "322px",
          left: "188px",
          height: "80px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 19 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/e964609d-cbc8-4c00-b03b-9ebaa00c1100/public"
        alt="19"
        style={{
          position: "absolute",
          top: "360px",
          left: "210px",
          height: "80px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 18 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/70925860-005f-4fdc-7a2a-545fee452500/public"
        alt="18"
        style={{
          position: "absolute",
          top: "445px",
          left: "210px",
          height: "41.5px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 17 */}
      <img
        src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/11dfe8e5-83df-455a-6e37-8ea75a45b100/public"
        alt="17"
        style={{
          position: "absolute",
          top: "490px",
          left: "210px",
          height: "41.5px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Box>
  );
}
