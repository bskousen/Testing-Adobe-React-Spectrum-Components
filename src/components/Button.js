import React from "react";
import { Button } from "@adobe/react-spectrum";

export default function ButtonDemo() {
  return (
    <Button variant="cta" onPress={() => alert("Hey there!")}>
      Hello React Spectrum!
    </Button>
  );
}
