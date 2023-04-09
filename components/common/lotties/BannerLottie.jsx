import { useLottie } from "lottie-react";

import bannerLottie from "./Banner.json";

function BannerLottie() {
  const options = {
    animationData: bannerLottie,
    loop: true,
  };

  const { View } = useLottie(options);
  return <>{View}</>;
}

export default BannerLottie;
