import { useLottie } from "lottie-react";

import Lottie from "./analyze.json";

function AnallyzeLottie() {
  const options = {
    animationData: Lottie,
    loop: true,
  };

  const { View } = useLottie(options);
  return <>{View}</>;
}

export default AnallyzeLottie;
