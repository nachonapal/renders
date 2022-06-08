import { GetStaticProps } from "next";
import { Render } from "../renders/types";
import api from "../renders/api";
import RenderHeading from "../Components/RenderHeading/RenderHeading";
import RenderFooter from "../Components/RenderFooter/RenderFooter";
import RenderLayout from "../Components/RenderLayout/RenderLayout";
import { Flex, Grid, Stack } from "@chakra-ui/react";
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
        <Flex direction={"column"}>
          {renders.map((render) => {
            return (
              <RenderLayout key={render.id} render={render}>
                <RenderHeading render={render} />
                <RenderFooter></RenderFooter>
              </RenderLayout>
            );
          })}
        </Flex>
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
