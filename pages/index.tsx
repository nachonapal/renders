import { GetStaticProps } from "next";
import { Render } from "../renders/types";
import api from "../renders/api";
import {
  Button,
  Grid,
  Stack,
  Text,
  Center,
  Heading,
  Icon,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar/Navbar";

interface Props {
  renders: Render[];
}
//Variables en segundos para llamar a la revalidacion de los datos del sheets
const tresVecesAlDia = (3600 * 24) / 3;

const IndexRoute: React.FC<Props> = ({ renders }) => {
  return (
    <>
      <Navbar renders={renders} />
      <Stack>
        <Grid templateColumns="repeat(auto-fill, minmax(1fr,1fr))">
          {renders.map((render) => {
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
              >
                <Stack alignItems="center">
                  <Heading size="2xl" fontWeight="semibold">
                    {render.titulo}
                  </Heading>
                  <Text>{render.descripcion}</Text>
                </Stack>
                <Stack pb={6} gap={12} direction="column" alignItems={"center"}>
                  <Stack direction={{ base: "column", md: "row" }} gap={4}>
                    <Button
                      w="16rem"
                      borderRadius={"full"}
                      bgColor={"secondary"}
                      color={"whiteAlpha.900"}
                      _hover={{ bg: "primary.500" }}
                    >
                      Custom Order
                    </Button>
                    <Button
                      w="16rem"
                      borderRadius={"full"}
                      bgColor={"primary"}
                      color={"blackAlpha.900"}
                      _hover={{ bg: "primary.500" }}
                    >
                      Existing Inventory
                    </Button>
                  </Stack>
                  <ChevronDownIcon fontSize={32} />
                </Stack>
              </Center>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const renders = await api.list();

  return {
    props: {
      renders,
    },
    revalidate: 10,
  };
};
export default IndexRoute;
