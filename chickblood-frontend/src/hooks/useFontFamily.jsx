// useFontFamily.js
import { useTranslation } from "react-i18next";

const useFontFamily = () => {
  const { i18n } = useTranslation();

  const getFontFamily = () => {
    switch (i18n.language) {
      case "en":
        return {
          light: "xsong",
          bold: "CHeiHK-UltraBold",
        };
      case "krn":
        return {
          light: "Pretendard-ExtraLight",
          bold: "Pretendard-ExtraBold",
        };
      case "chn":
        return {
          light: "xsong",
          bold: "DHeiFanTi",
        };
      case "zh":
        return {
          light: "xsong",
          bold: "DHeiFanTi",
        };
      case "jpn":
        return {
          light: "Hiragiro-Mincho-Pro-W3",
          bold: "hiragino-mincho-pron-w6",
        };
      default:
        return {
          light: "CHeiHK-UltraBold",
          bold: "DHeiFanTi",
        };
    }
  };

  return getFontFamily();
};

export default useFontFamily;
