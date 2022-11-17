import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { NativeBaseProvider } from "native-base";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/queryClient";
import { createGlobalStyle } from "styled-components";
import { theme } from "./app/theme";

const GlobalStyle = createGlobalStyle<{ backgroundColor: string }>`
  body {
    font-family: 'Urbanist', serif;
    margin: 0;
    background-color: ${(props) => props.backgroundColor ?? "white"};
  }
`;
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <GlobalStyle backgroundColor={theme.colors.primary} />
            <App />
          </Provider>
        </BrowserRouter>
      </NativeBaseProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
