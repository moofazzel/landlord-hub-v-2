import Lottie from "lottie-react";

import LottieFile from "./analyze.json";

function AnallyzeLottie() {
  // const options = {
  //   animationData: Lottie,
  //   loop: true,
  // };

  // const { View } = useLottie(options);
  return (
    <>
      <Lottie
        // style={{ width: "400px" }}
        animationData={LottieFile}
        loop={true}
      />
    </>
  );
}

export default AnallyzeLottie;
