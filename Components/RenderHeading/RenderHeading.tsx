import { Stack, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const RenderHeading = ({ render }) => {
  return (
    <Stack
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 },
      }}
      alignItems="center"
    >
      <Heading size="2xl" fontWeight="semibold">
        {render.titulo}
      </Heading>
      <Text>{render.descripcion}</Text>
    </Stack>
  );
};

export default RenderHeading;
