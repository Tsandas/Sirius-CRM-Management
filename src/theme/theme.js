import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#e3f2ff",
      100: "#b3d4ff",
      200: "#81b5ff",
      300: "#4f96ff",
      400: "#1d77ff",
      500: "#005ce6",
      600: "#0047b4",
      700: "#003182",
      800: "#001c51",
      900: "#000921",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "gray.50",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      },
    }),
  },
});

export default theme;
