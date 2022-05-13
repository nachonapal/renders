import { useDisclosure, Flex, Button, VStack, Link } from "@chakra-ui/react";
import { CustomDrawer } from "../CustomDrawer/CustomDrawer";
import React from "react";

export const MobileNavbar = ({ renders }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button
        h={"auto"}
        px={6}
        py={2}
        bgColor={"gray.200"}
        borderRadius={"2xl"}
        ref={btnRef}
        onClick={onOpen}
      >
        Menu
      </Button>
      <CustomDrawer
        p={15}
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <VStack alignItems="left">
          {renders.map((render) => (
            <Link href={`#${render.titulo.replace(" ", "")}`} key={render.id}>
              <Button variant="text"> {render.titulo} </Button>
            </Link>
          ))}
        </VStack>
      </CustomDrawer>
    </Flex>
  );
};
