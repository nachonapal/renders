import {
  Heading,
  Center,
  Flex,
  Text,
  Box,
  Button,
  Stack,
} from "@chakra-ui/react";
import { SingleRender } from "../SingleRender/SingleRender";
export const RenderSection = ({ menues: { renders } }: { menues: any }) => {
  return renders.map((render: any) => (
    <SingleRender key={render.id} render={render} />
  ));
};
