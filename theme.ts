import { extendTheme, theme } from "@chakra-ui/react";
export default extendTheme({
  semanticTokens: {
    colors: {
      primary: "#E6E6E4",
      secondary: "#3A3D41",
    },
  },
  fonts: {
    body: "Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
    heading: "Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
  },
  components: {
    Link: {
      variants: {
        "no-decoration": {
          textDecoration: "none !important",
          borderRadius: "2xl",
        },
      },
    },
    Button: {
      variants: {
        ghost: {
          borderRadius: "2xl",
          _hover: {
            borderRadius: "2xl",
            bgColor: "blackAlpha.200",
          },
        },
      },
    },
  },
});
