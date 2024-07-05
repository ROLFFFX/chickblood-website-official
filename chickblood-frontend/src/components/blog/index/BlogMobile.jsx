import React, { useState } from "react";
import LoadingPage from "../../../utils/LoadingPage";

export default function BlogMobile() {
  const [openLoader, setOpenLoader] = useState(true);
  const handleCloseLoader = () => {
    setOpenLoader(false);
  };
  return (
    <div>
      <LoadingPage
        openLoader={openLoader}
        handleClose={handleCloseLoader}
      ></LoadingPage>
    </div>
  );
}
