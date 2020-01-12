import React, { useState } from "react";
import * as Font from "expo-font";

import { AppLoading } from "expo";
import Home from "./screens/Home";

const getFonts = () =>
  Font.loadAsync({
    "nunito-reguler": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
}
