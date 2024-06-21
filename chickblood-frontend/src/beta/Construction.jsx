import { Typography } from "@mui/material";
import p5 from "p5";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import useFontFamily from "../hooks/useFontFamily";

const Construction = () => {
  const { t } = useTranslation();
  const useFont = useFontFamily();
  const sketchRef = useRef();


  useEffect(() => {
    const numSegments = 15;
    const segLength = 50;

    const bottomChain = {
      x: new Array(numSegments).fill(0),
      y: new Array(numSegments).fill(0),
      angle: new Array(numSegments).fill(0),
    };

    const topChain = {
      x: new Array(numSegments).fill(0),
      y: new Array(numSegments).fill(0),
      angle: new Array(numSegments).fill(0),
    };

    const leftChain = {
      x: new Array(numSegments).fill(0),
      y: new Array(numSegments).fill(0),
      angle: new Array(numSegments).fill(0),
    };

    const rightChain = {
      x: new Array(numSegments).fill(0),
      y: new Array(numSegments).fill(0),
      angle: new Array(numSegments).fill(0),
    };

    let targetX, targetY;

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.strokeWeight(20);
        p.stroke("#dcdc22");

        bottomChain.x.fill(p.width / 2);
        bottomChain.y.fill(p.height);
        topChain.x.fill(p.width / 2);
        topChain.y.fill(0);
        leftChain.x.fill(0);
        leftChain.y.fill(p.height / 2);
        rightChain.x.fill(p.width);
        rightChain.y.fill(p.height / 2);
      };

      p.draw = () => {
        p.background(130, 207, 239);

        reachSegment(bottomChain, 0, p.mouseX, p.mouseY);
        updateChain(bottomChain);

        reachSegment(topChain, 0, p.mouseX, p.mouseY);
        updateChain(topChain);

        reachSegment(leftChain, 0, p.mouseX, p.mouseY);
        updateChain(leftChain);

        reachSegment(rightChain, 0, p.mouseX, p.mouseY);
        updateChain(rightChain);
      };

      function updateChain(chain) {
        for (let i = 1; i < numSegments; i++) {
          reachSegment(chain, i, targetX, targetY);
        }
        for (let j = chain.x.length - 1; j >= 1; j--) {
          positionSegment(chain, j, j - 1);
        }
        for (let k = 0; k < numSegments; k++) {
          segment(chain.x[k], chain.y[k], chain.angle[k], (k + 1) * 2);
        }
      }

      function positionSegment(chain, a, b) {
        chain.x[b] = chain.x[a] + p.cos(chain.angle[a]) * segLength;
        chain.y[b] = chain.y[a] + p.sin(chain.angle[a]) * segLength;
      }

      function reachSegment(chain, i, xin, yin) {
        const dx = xin - chain.x[i];
        const dy = yin - chain.y[i];
        chain.angle[i] = p.atan2(dy, dx);
        targetX = xin - p.cos(chain.angle[i]) * segLength;
        targetY = yin - p.sin(chain.angle[i]) * segLength;
      }

      function segment(x, y, a, sw) {
        p.strokeWeight(sw);
        p.push();
        p.translate(x, y);
        p.rotate(a);
        p.line(0, 0, segLength, 0);
        p.pop();
      }
    };

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove();
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Typography
        style={{
          position: "absolute",
          width: "100%",
          top: "50%",
          transform: "translateY(-50%)",
          textAlign: "center",
          zIndex: 10,
          color: "#013994",
          fontFamily: useFont.bold,
        }}
      >
        {t("construction")} <br></br>{" "}
        <span style={{ fontSize: "14px" }}>{t("background_credit")}</span>
      </Typography>
    </div>
  );
};

export default Construction;
