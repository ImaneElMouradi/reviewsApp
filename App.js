import React, { useState } from "react";
import * as Font from "expo-font";

import { AppLoading } from "expo";

import Navigator from "./routes/drawer";

const getFonts = () =>
  Font.loadAsync({
    "nunito-reguler": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
}
