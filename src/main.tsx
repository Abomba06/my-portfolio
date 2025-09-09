import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

const rootEl = document.getElementById("root")!;

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark"/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
