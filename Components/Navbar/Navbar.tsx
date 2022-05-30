import { Image, Flex, Button, Stack, Link, Box } from "@chakra-ui/react";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import { Render } from "../../renders/types";
import logo from "../../assets/img/logo.png";
interface Props {
  renders: Render[];
}

const sections = [
  { id: "s1", title: "About" },
  { id: "s2", title: "Contact" },
];

const Navbar: React.FC<Props> = ({ renders }) => {
  return (
    <Flex
      position={"fixed"}
      w="100%"
      py={4}
      align="center"
      justify="space-between"
      px={{ base: 6, xl: 16 }}
      top={0}
    >
      <Image
        src={logo.src}
        w={"auto"}
        alt="tesla logo"
        h={{ base: "0.8em", xl: "1em" }}
      />
      <Stack
        display={{ base: "none", xl: "flex" }}
        direction="row"
        as="nav"
        spacing="0"
      >
        {renders.map((render: any) => (
          <Link
            variant={"no-decoration"}
            href={`#${render.titulo.replace(" ", "")}`}
            key={render.id}
          >
            <Button variant="ghost"> {render.titulo} </Button>
          </Link>
        ))}
      </Stack>
      <Stack direction={"row"}>
        <Box display={{ base: "none", xl: "flex" }}>
          {sections.map((section: any) => (
            <Link variant={"no-decoration"} key={section.id}>
              <Button variant="ghost"> {section.title} </Button>
            </Link>
          ))}
        </Box>
        <MobileNavbar renders={renders} />
      </Stack>
    </Flex>
  );
};
export default Navbar;
