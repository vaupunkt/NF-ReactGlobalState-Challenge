import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLight = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: false, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office", isOn: false, id: 8 },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLight);

  const numberlightsOn = lights.filter((light) => light.isOn === true).length;

  function handleAllLightsOff() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
    console.log(lights);
  }

  function handleAllLightsOn() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
    console.log(lights);
  }
  let statusAllLightsOn;
  if (numberlightsOn === lights.length) {
    statusAllLightsOn = true;
  } else {
    statusAllLightsOn = false;
  }

  let statusAllLightsOff;
  let isDimmed;
  if (numberlightsOn === 0) {
    statusAllLightsOff = true;
    isDimmed = true;
  } else {
    statusAllLightsOff = false;
    isDimmed = false;
  }

  function handleToggle(toggleId) {
    setLights(
      lights.map((light) =>
        light.id === toggleId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        numberlightsOn={numberlightsOn}
        toggleLight={handleToggle}
        lights={lights}
        handleAllLightsOff={handleAllLightsOff}
        handleAllLightsOn={handleAllLightsOn}
        statusAllLightsOn={statusAllLightsOn}
        statusAllLightsOff={statusAllLightsOff}
      />
    </Layout>
  );
}
