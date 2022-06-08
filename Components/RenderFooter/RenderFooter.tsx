import { Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Buttons from "../Buttons/Buttons";
import { ChevronDownIcon } from "@chakra-ui/icons";

const RenderFooter = () => {
  return (
    <Stack pb={6} gap={12} direction="column" alignItems={"center"}>
      <Buttons />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.2 },
        }}
      >
        <ChevronDownIcon fontSize={32} />
      </motion.div>
    </Stack>
  );
};

export default RenderFooter;
