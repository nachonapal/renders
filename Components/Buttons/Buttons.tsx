import { Stack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Buttons = () => {
  return (
    <Stack direction={{ base: "column", md: "row" }} gap={4}>
      <Button
        as={motion.button}
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1 },
        }}
        w="16rem"
        borderRadius={"full"}
        bgColor={"secondary"}
        color={"whiteAlpha.900"}
        _hover={{ bg: "primary.500" }}
      >
        Custom Order
      </Button>
      <Button
        as={motion.button}
        w="16rem"
        borderRadius={"full"}
        bgColor={"primary"}
        color={"blackAlpha.900"}
        _hover={{ bg: "primary.500" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1 },
        }}
      >
        Existing Inventory
      </Button>
    </Stack>
  );
};

export default Buttons;
