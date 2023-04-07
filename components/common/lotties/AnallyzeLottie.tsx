import Lottie from "lottie-react";

import LottieFile from "./analyze.json";

function AnallyzeLottie() {
  return (
    <>
      <Lottie
        style={{ background: "transparent" }}
        animationData={LottieFile}
        loop={true}
      />
    </>
  );
}

export default AnallyzeLottie;
