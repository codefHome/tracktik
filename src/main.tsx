import React from "react";

import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@mui/material";
import {lightTheme } from "../customeTheme.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
     <ThemeProvider theme={ lightTheme}>
      <Router>
      <App />
      </Router>
  
     </ThemeProvider>
  
 
     </Provider>
    
  </React.StrictMode>,
)