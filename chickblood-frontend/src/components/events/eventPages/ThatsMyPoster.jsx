import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import CBAppBar from "../../../utils/CBAppBar";
import CustomCursor from "../../../utils/CustomCursor";
import LoadingPage from "../../../utils/LoadingPage";
import { motion } from "framer-motion";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/041da201-95d2-417e-4947-f704603c7600/public", // background
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/d6407a24-ba9a-4f01-24a3-4a390c413100/public", // poster english
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7f68d20b-6173-460c-3ba7-b035bd78c700/public", // poster korean
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/893cdcde-5d2a-42f4-16f4-cfec5b863c00/public", // poster chinese
];

export default function ThatsMyPoster() {
  const { width } = useWindowSize();
  // image preload
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

  // mobile view image scroll

  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdImageRef = useRef(null);

  const handleScrollTo = (imageRef) => {
    if (imageRef && imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7d4373f1-32e4-49aa-3f58-21390b23e400/public)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center 0px",
        backgroundSize: "contain",
        height: "100vh",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* app bar */}
      <CBAppBar />
      {/* Loading Page */}
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
      {width > 500 && <CustomCursor></CustomCursor>}
      {/* rest of the page, images and content */}
      <Box sx={{ overflow: "auto", display: "flex" }}>
        {width > 500 ? (
          // desktop view------------------------------------------------------------------------------------------------
          <Grid container p={4}>
            {/* english */}
            <Grid
              item
              xs={4}
              sx={{
                p: 4,
                display: "flex",
                justifyContent: "center",
                alignItmes: "center",
              }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/d6407a24-ba9a-4f01-24a3-4a390c413100/public"
                style={{ width: "80%", height: "auto" }}
              ></img>
            </Grid>
            {/* chinese */}
            <Grid
              item
              xs={4}
              sx={{
                p: 4,
                display: "flex",
                justifyContent: "center",
                alignItmes: "center",
              }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/893cdcde-5d2a-42f4-16f4-cfec5b863c00/public"
                style={{ width: "80%", height: "auto" }}
              ></img>
            </Grid>
            {/* korean */}
            <Grid
              item
              xs={4}
              sx={{
                p: 4,
                display: "flex",
                justifyContent: "center",
                alignItmes: "center",
              }}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7f68d20b-6173-460c-3ba7-b035bd78c700/public"
                style={{ width: "80%", height: "auto" }}
              ></img>
            </Grid>
            {/* english */}
            <Grid item xs={4} mb={5} p={4} mt={-5}>
              {/* <Typography
                sx={{ textAlign: "center", fontFamily: "CHeiHK-UltraBold" }}
              >
                🪁That's my…
                <br />
                <br />
              </Typography> */}
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  p: 2,
                }}
              >
                <Typography sx={{ fontFamily: "xsong", fontSize: "16px" }}>
                  This isn't just a party; it's an opportunity to share. <br />
                  <br />
                  The world connects through friendship, through a painting
                  created on a simple desk or a melody composed, through sound,
                  visuals, a diary entry—I share what's mine with you, and
                  invite you to share what's yours with me. <br />
                  <br />
                  We believe every experience deserves to be heard, and every
                  piece of friendship can connect our world. <br />
                  <br />
                  For our first pop-up in Seoul, six musicians and artists from
                  China and Korea will perform live or DJ. You can also enjoy
                  art works from two independent Chinese artists. <br />
                  <br />
                  Address:
                  <CustomAnchorTag name={"acs.kr"}></CustomAnchorTag>
                  <br />
                  Time:9/14, 18:00-24:00 <br />
                  <br />
                  DOOR TICKET ONLY 🎫:₩15000
                  <br />
                  <br />
                  You can hear: <br />
                  <CustomAnchorTag name={"y_aeoni"}></CustomAnchorTag>
                  <CustomAnchorTag
                    name={"chiyokookillthegame"}
                  ></CustomAnchorTag>
                  <CustomAnchorTag name={"y2k92"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yakayakayaka___"}></CustomAnchorTag>
                  <CustomAnchorTag name={"limbo_limbs"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yyetsubyy"}></CustomAnchorTag>
                  <br /> You can see:
                  <br /> <CustomAnchorTag name={"oliwabiu"}></CustomAnchorTag>
                  <CustomAnchorTag name={"ritadelilla_"}></CustomAnchorTag>
                </Typography>
              </Box>
            </Grid>

            {/* korean */}
            <Grid item xs={4} p={4} mt={-5}>
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  p: 2,
                }}
              >
                <Typography
                  sx={{ fontFamily: "Pretendard-ExtraLight", fontSize: "15px" }}
                >
                  이건 단순한 파티가 아니라, 나눔에 위해서 시작하는 것입니다.{" "}
                  <br />
                  <br />
                  세상은 우정으로 연결될 수도 있고, 당신의 책상 위에 마음대로
                  그린 그림이나 즉흥적으로 만든 멜로디로 연결될 수도 있습니다.{" "}
                  <br />
                  <br />
                  소리, 화면, 일기 내가 가진 것을 당신에게 주고 나도 당신의 것을
                  가질 수 있습니다. <br />
                  <br />
                  우리는 모든 사람의 경험은 귀담아 들을 가치가 있고, 모든
                  창작물이 누군가에게 발견될 수 있으며, 모든 우정이 우리의
                  세상을 이어줄 수 있다고 믿습니다. 서울에서 첫 이벤트에서는
                  중국과 한국에서 온 6명 음악 아티스트들이 라이브 공연과 DJ
                  공연을 보여드리겠습니다! 또한, 현장에서 중국의 독립 아티스트
                  두 명의 작품도 구매하실 수 있습니다.
                  <br />
                  포부는 내거야,친구도 내거야!!
                  <br />
                  <br />
                  장소:
                  <CustomAnchorTag name={"acs.kr"}></CustomAnchorTag>
                  <br />
                  시간:9/14, 18:00-24:00 <br />
                  <br />
                  DOOR TICKET ONLY 🎫:₩15000
                  <br />
                  <br />
                  들으실 수 있는 아티스트:
                  <br />
                  <CustomAnchorTag name={"y_aeoni"}></CustomAnchorTag>
                  <CustomAnchorTag
                    name={"chiyokookillthegame"}
                  ></CustomAnchorTag>
                  <CustomAnchorTag name={"y2k92"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yakayakayaka___"}></CustomAnchorTag>
                  <CustomAnchorTag name={"limbo_limbs"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yyetsubyy"}></CustomAnchorTag>
                  <br /> 보실 수 있는 아티스트:
                  <br /> <CustomAnchorTag name={"oliwabiu"}></CustomAnchorTag>
                  <CustomAnchorTag name={"ritadelilla_"}></CustomAnchorTag>
                </Typography>
              </Box>
            </Grid>
            {/* chinese */}
            <Grid item xs={4} mb={5} p={4} mt={-5}>
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  p: 2,
                }}
              >
                <Typography sx={{ fontFamily: "xsong", fontSize: "16px" }}>
                  这不是一场普通的派对，而是一个分享的契机。
                  <br />
                  <br />
                  世界通过友爱相连，也可以通过从简单书桌上创作出来的一幅画、或一段旋律相系。
                  <br />
                  <br />
                  声音、画面、一段日记。
                  我将我拥有的交换给你，我也可以拥有你的。
                  <br />
                  <br />
                  我们相信，每个人的经历都值得被倾听，每个人所拥有的东西都有所价值，每一段友情都能连接起我们的世界。
                  <br />
                  <br />
                  第一次的首尔event，我们选择了6位来自中国和韩国的音乐艺术家给大家带来或现场演出或DJ表演。你也可以在现场购买到两位来自中国的独立艺术家的作品。
                  <br />
                  <br />
                  That's my雄心壮志，也是my朋友。
                  <br />
                  <br />
                  地址:
                  <CustomAnchorTag name={"acs.kr"}></CustomAnchorTag>
                  <br />
                  时间:9/14, 18:00-24:00 <br />
                  <br />
                  DOOR TICKET ONLY 🎫:₩15000
                  <br />
                  <br />
                  你可以听到:
                  <br />
                  <CustomAnchorTag name={"y_aeoni"}></CustomAnchorTag>
                  <CustomAnchorTag
                    name={"chiyokookillthegame"}
                  ></CustomAnchorTag>
                  <CustomAnchorTag name={"y2k92"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yakayakayaka___"}></CustomAnchorTag>
                  <CustomAnchorTag name={"limbo_limbs"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yyetsubyy"}></CustomAnchorTag>
                  <br /> 你可以看到:
                  <br /> <CustomAnchorTag name={"oliwabiu"}></CustomAnchorTag>
                  <CustomAnchorTag name={"ritadelilla_"}></CustomAnchorTag>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ) : (
          // mobile view------------------------------------------------------------------------------------------------
          <Grid container p={2} mb={5}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Breadcrumbs>
                <Link
                  underline="hover"
                  color="inherit"
                  onClick={() => handleScrollTo(firstImageRef)}
                >
                  <Typography sx={{ fontFamily: "CHeiHK-UltraBold" }}>
                    EN
                  </Typography>
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  onClick={() => handleScrollTo(secondImageRef)}
                >
                  <Typography sx={{ fontFamily: "Pretendard-ExtraBold" }}>
                    한국어
                  </Typography>
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  onClick={() => handleScrollTo(thirdImageRef)}
                >
                  <Typography sx={{ fontFamily: "DHeiFanTi" }}>中文</Typography>
                </Link>
              </Breadcrumbs>
            </Grid>
            {/* english */}
            <Grid
              item
              xs={12}
              sx={{
                p: 1.5,
                display: "flex",
                justifyContent: "center",
                alignItmes: "center",
              }}
              ref={firstImageRef}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/d6407a24-ba9a-4f01-24a3-4a390c413100/public"
                style={{ width: "100%", height: "auto" }}
              ></img>
            </Grid>
            {/* english */}
            <Grid item xs={12} p={1}>
              {/* <Typography
                sx={{ textAlign: "center", fontFamily: "CHeiHK-UltraBold" }}
              >
                🪁That's my…
                <br />
                <br />
              </Typography> */}
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  p: 2,
                }}
              >
                <Typography sx={{ fontFamily: "xsong", fontSize: "16px" }}>
                  This isn't just a party; it's an opportunity to share. <br />
                  <br />
                  The world connects through friendship, through a painting
                  created on a simple desk or a melody composed, through sound,
                  visuals, a diary entry—I share what's mine with you, and
                  invite you to share what's yours with me. <br />
                  <br />
                  We believe every experience deserves to be heard, and every
                  piece of friendship can connect our world. <br />
                  <br />
                  For our first pop-up in Seoul, six musicians and artists from
                  China and Korea will perform live or DJ. You can also enjoy
                  art works from two independent Chinese artists. <br />
                  <br />
                  Address:<CustomAnchorTag name={"acs.kr"}></CustomAnchorTag>
                  <br />
                  Time:9/14, 18:00-24:00 <br />
                  <br />
                  DOOR TICKET ONLY 🎫:₩15000
                  <br />
                  <br />
                  You can hear: <br />
                  <CustomAnchorTag name={"y_aeoni"}></CustomAnchorTag>
                  <CustomAnchorTag
                    name={"chiyokookillthegame"}
                  ></CustomAnchorTag>
                  <CustomAnchorTag name={"y2k92"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yakayakayaka___"}></CustomAnchorTag>
                  <CustomAnchorTag name={"limbo_limbs"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yyetsubyy"}></CustomAnchorTag>
                  <br /> You can see:
                  <br /> <CustomAnchorTag name={"oliwabiu"}></CustomAnchorTag>
                  <CustomAnchorTag name={"ritadelilla_"}></CustomAnchorTag>
                </Typography>
              </Box>
            </Grid>
            {/* korean */}
            <Grid
              item
              xs={12}
              sx={{
                p: 1.5,
                display: "flex",
                justifyContent: "center",
                alignItmes: "center",
              }}
              ref={secondImageRef}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7f68d20b-6173-460c-3ba7-b035bd78c700/public"
                style={{ width: "100%", height: "auto" }}
              ></img>
            </Grid>
            {/* korean */}
            <Grid item xs={12} p={1}>
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  p: 2,
                }}
              >
                <Typography
                  sx={{ fontFamily: "Pretendard-ExtraLight", fontSize: "15px" }}
                >
                  이건 단순한 파티가 아니라, 나눔에 위해서 시작하는 것입니다.{" "}
                  <br />
                  <br />
                  세상은 우정으로 연결될 수도 있고, 당신의 책상 위에 마음대로
                  그린 그림이나 즉흥적으로 만든 멜로디로 연결될 수도 있습니다.{" "}
                  <br />
                  <br />
                  소리, 화면, 일기 내가 가진 것을 당신에게 주고 나도 당신의 것을
                  가질 수 있습니다. <br />
                  <br />
                  우리는 모든 사람의 경험은 귀담아 들을 가치가 있고, 모든
                  창작물이 누군가에게 발견될 수 있으며, 모든 우정이 우리의
                  세상을 이어줄 수 있다고 믿습니다. 서울에서 첫 이벤트에서는
                  중국과 한국에서 온 6명 음악 아티스트들이 라이브 공연과 DJ
                  공연을 보여드리겠습니다! 또한, 현장에서 중국의 독립 아티스트
                  두 명의 작품도 구매하실 수 있습니다.
                  <br />
                  포부는 내거야,친구도 내거야!!
                  <br />
                  <br />
                  장소:
                  <CustomAnchorTag name={"acs.kr"}></CustomAnchorTag>
                  <br />
                  시간:9/14, 18:00-24:00 <br />
                  <br />
                  DOOR TICKET ONLY 🎫:₩15000
                  <br />
                  <br />
                  들으실 수 있는 아티스트:
                  <br />
                  <CustomAnchorTag name={"y_aeoni"}></CustomAnchorTag>
                  <CustomAnchorTag
                    name={"chiyokookillthegame"}
                  ></CustomAnchorTag>
                  <CustomAnchorTag name={"y2k92"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yakayakayaka___"}></CustomAnchorTag>
                  <CustomAnchorTag name={"limbo_limbs"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yyetsubyy"}></CustomAnchorTag>
                  <br /> 보실 수 있는 아티스트:
                  <br /> <CustomAnchorTag name={"oliwabiu"}></CustomAnchorTag>
                  <CustomAnchorTag name={"ritadelilla_"}></CustomAnchorTag>
                </Typography>
              </Box>
            </Grid>

            {/* chinese */}
            <Grid
              item
              xs={12}
              sx={{
                p: 1.5,
                display: "flex",
                justifyContent: "center",
                alignItmes: "center",
              }}
              ref={thirdImageRef}
            >
              <img
                src="https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/893cdcde-5d2a-42f4-16f4-cfec5b863c00/public"
                style={{ width: "100%", height: "auto" }}
              ></img>
            </Grid>
            {/* chinese */}
            <Grid item xs={12} p={1}>
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  p: 2,
                }}
              >
                <Typography sx={{ fontFamily: "xsong", fontSize: "16px" }}>
                  这不是一场普通的派对，而是一个分享的契机。
                  <br />
                  <br />
                  世界通过友爱相连，也可以通过从简单书桌上创作出来的一幅画、或一段旋律相系。
                  <br />
                  <br />
                  声音、画面、一段日记。
                  我将我拥有的交换给你，我也可以拥有你的。
                  <br />
                  <br />
                  我们相信，每个人的经历都值得被倾听，每个人所拥有的东西都有所价值，每一段友情都能连接起我们的世界。
                  <br />
                  <br />
                  第一次的首尔event，我们选择了6位来自中国和韩国的音乐艺术家给大家带来或现场演出或DJ表演。你也可以在现场购买到两位来自中国的独立艺术家的作品。
                  <br />
                  <br />
                  That's my雄心壮志，也是my朋友。
                  <br />
                  <br />
                  地址:
                  <CustomAnchorTag name={"acs.kr"}></CustomAnchorTag>
                  <br />
                  时间:9/14, 18:00-24:00 <br />
                  <br />
                  DOOR TICKET ONLY 🎫:₩15000
                  <br />
                  <br />
                  你可以听到:
                  <br />
                  <CustomAnchorTag name={"y_aeoni"}></CustomAnchorTag>
                  <CustomAnchorTag
                    name={"chiyokookillthegame"}
                  ></CustomAnchorTag>
                  <CustomAnchorTag name={"y2k92"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yakayakayaka___"}></CustomAnchorTag>
                  <CustomAnchorTag name={"limbo_limbs"}></CustomAnchorTag>
                  <CustomAnchorTag name={"yyetsubyy"}></CustomAnchorTag>
                  <br /> 你可以看到:
                  <br /> <CustomAnchorTag name={"oliwabiu"}></CustomAnchorTag>
                  <CustomAnchorTag name={"ritadelilla_"}></CustomAnchorTag>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </div>
  );
}

function CustomAnchorTag({ name }) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        style={{ transformOrigin: "center" }}
      >
        <a
          href={`https://www.instagram.com/${name}/`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "underline",
            color: "black",
            fontFamily: "Pretendard-ExtraLight",
          }}
        >
          {`@${name}`}
        </a>
      </motion.div>
    </Box>
  );
}
