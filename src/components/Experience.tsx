import { Environment, Grid, OrbitControls, Stage } from "@react-three/drei";
import { useControls } from "leva";
import React from "react";
import { Magikarp } from "./Magikarp";
import { Model } from "./Magikarp2";

type Props = {};

const Experience = (props: Props) => {
  // const { color } = useControls({ color: "#b78135" });
  return (
    <>
      <OrbitControls />
      <Grid cellColor="white" args={[10, 10]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="city" background={true} />
      {/* <Stage
        intensity={0.5}
        environment="city"
        shadows={{ type: "accumulative", color, colorBlend: 2, opacity: 2 }}
        adjustCamera={0.9}
      > */}
      <Model />
      {/* </Stage> */}
    </>
  );
};

export default Experience;
