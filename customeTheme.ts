/* eslint-disable @typescript-eslint/no-explicit-any */

import { createTheme } from "@mui/material";


declare module '@mui/material/styles' {
  interface Theme {
    drawer: {
      width: number;
      collapsedWidth: number;
      paper: {
        [key: string]: any;
      };
      list: {
        [key: string]: any;
      };
    },
  }
}



const lightTheme = createTheme({

  palette: {
    mode: 'light',
    primary: {
      main: '#3CA32B',
      contrastText: '#fff',
      light: '',
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    secondary: {
      main: '#2A9EB7',
      contrastText: '#fff',
      light: '',
    },
    
  },

  typography: {
    fontFamily: 'Inter',
    caption: {
      color: '#000000',
      fontSize: '15px',
      fontWeight: 'normal',
      letterSpacing: '1px',
    },
    overline: {
      color: '#000000',
      textTransform: 'none',
      fontSize: '15px',
      fontStyle:'italic',
    },
    subtitle1: {
      color: '#000000',
      fontSize: '15px',
      fontWeight: 600,
      letterSpacing: '1px',
      
     
    },
    subtitle2: {
      color: '#000000',
      fontSize: '25px',
      fontWeight: 600,
      letterSpacing: '1px',
      },

  },
  components: {

    
    MuiButtonBase: {
      defaultProps: {
        sx: {
          ":disabled": {
            background: "#F3F3F3",
            color: "#DADADA",
            pointerEvents: "none",
            cursor: "not-allowed",
            border: "1px solid #000"
          }
        }
      },

    },

  },

});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3CA32B',
      contrastText: '#fff',
      light: '',
    },
    secondary: {
      main: '#2A9EB7',
      contrastText: '#fff',
      light: '',
    },
   
    background: {
      default: "#1C2225",
      paper: "#181A1C"
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
    action: {
      active: '#fff',
      hover: '#666',
    },
  },

  typography: {
    fontFamily: 'Inter',
    caption: {
      color: '#FFFFFF',
      fontSize: '15px',
      fontWeight: 'normal',
      letterSpacing: '1px',
    },
    overline: {
      color: '#FFFFFF',
      textTransform: 'none',
      fontSize: '15px',
      fontStyle:'italic',
    },
    subtitle1: {
      color: '#FFFFFF',
      fontSize: '15px',
      fontWeight: 600,
      letterSpacing: '1px',
      
     
    },
    subtitle2: {
      color: '#FFFFFF',
      fontSize: '25px',
      fontWeight: 600,
      letterSpacing: '1px',
      },

  },
  components: {

    
    MuiButtonBase: {
      defaultProps: {
        sx: {
          ":disabled": {
            background: "#F3F3F3",
            color: "#888 !important",
            pointerEvents: "none",
            cursor: "not-allowed",
            border: "1px solid #000"
          }
        }
      },
     
    },
  },
});

export { lightTheme, darkTheme };

