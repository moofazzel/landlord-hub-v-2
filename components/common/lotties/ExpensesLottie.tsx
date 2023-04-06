import { useLottie } from "lottie-react";

import Lottie from "./experses.json";

function ExpensesLottie() {
  const options = {
    animationData: Lottie,
    loop: true,
  };

  const { View } = useLottie(options);
  return <>{View}</>;
}

export default ExpensesLottie;
