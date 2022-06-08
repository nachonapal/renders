import React from "react";
import { Center } from "@chakra-ui/react";

const RenderLayout = ({ render, children }) => {
  return (
    <Center
      bgImage={{ base: render.mobileUrl, md: render.url }}
      bgRepeat="no-repeat"
      bgPosition={"center"}
      bgSize={"cover"}
      h="100vh"
      flexDirection={"column"}
      justifyContent="space-between"
      key={render.id}
      pt={24}
      id={render.titulo.replace(" ", "")}
    >
      {children}
    </Center>
  );
};

export default RenderLayout;
