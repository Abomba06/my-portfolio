import { extendTheme } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    body: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  },
  styles: {
    global: {
      "html, body, #root": { height: "100%" },
      body: { bg: "gray.50" },
    },
  },
  semanticTokens: {
    colors: {
      surface: { _light: "white", _dark: "gray.800" },
      subtle: { _light: "gray.600", _dark: "gray.300" },
      border: { _light: "gray.200", _dark: "gray.700" },
    },
  },
  sizes: {
    container: { xl: "1024px", "2xl": "1120px" }, // keep content narrower
  },
  components: {
    Container: {
      baseStyle: { px: { base: 4, md: 6 } },
    },
    Card: {
      baseStyle: {
        container: {
          borderWidth: "1px",
          rounded: "xl",
          shadow: "sm",
        },
      },
    },
    Heading: {
      sizes: {
        lg: { fontSize: ["xl", "2xl"] },
        md: { fontSize: ["lg", "xl"] },
      },
    },
  },
});

export default theme;
