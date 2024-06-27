import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Test() {
  const [content, setContent] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setContent(1);
        }}
      >
        content 1
      </button>
      <button
        onClick={() => {
          setContent(2);
        }}
      >
        content 2
      </button>
      <button
        onClick={() => {
          setContent(3);
        }}
      >
        content 3
      </button>
      <div className="content">
        {content === 1 ? (
          <Section1 />
        ) : content === 2 ? (
          <Section2 />
        ) : content === 3 ? (
          <Section3 />
        ) : null}
      </div>
    </div>
  );
}

const Section1 = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("dummycontent1")}
      <br></br>
      <br></br>
      {t("dummycontent1")}
    </div>
  );
};

const Section2 = () => {
  const { t } = useTranslation();
  return <div>{t("dummycontent2")}</div>;
};

const Section3 = () => {
  const { t } = useTranslation();
  return <div>{t("dummycontent3")}</div>;
};
