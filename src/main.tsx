import React from "react";

import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppSelector } from "store/hooks.ts";
import { darkTheme, lightTheme } from "../customeTheme.ts";

const RootComponent = () => {
  const {isDark} = useAppSelector(state => state.tracking);

  return (
    <React.StrictMode>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
          <Router>
              <App />
          </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};




ReactDOM.createRoot(document.getElementById('root')!).render(

     <Provider store={store}>
     <RootComponent/>
     </Provider>
    
 
)