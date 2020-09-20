import React from "react";
import { Flex, Image } from "@adobe/react-spectrum";

export default function ImageDemo() {
  return (
    <Flex width="100%" height="400px">
      <Image
        src="https://i.imgur.com/c3gTKSJ.jpg"
        alt="Eiffel Tower at sunset"
        objectFit="cover"
      />
    </Flex>
  );
}
