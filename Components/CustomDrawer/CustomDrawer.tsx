import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  DrawerHeader,
  DrawerFooter,
} from "@chakra-ui/react";
export const CustomDrawer = ({
  p = 15,
  isOpen = false,
  children,
  onClose,
  finalFocusRef,
}: {
  children: any;
  isOpen: boolean;
  p: number;
  onClose: any;
  finalFocusRef: any;
}) => {
  return (
    <Flex>
      <Drawer
        isOpen={isOpen}
        placement={"right"}
        onClose={onClose}
        finalFocusRef={finalFocusRef}
      >
        <DrawerOverlay backdropFilter="auto" backdropBlur={"3px"} />
        <DrawerContent pt={8} alignItems="start">
          <DrawerCloseButton alignSelf="end" m={p} />
          <DrawerHeader />
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
