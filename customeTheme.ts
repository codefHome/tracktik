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

const appTheme = createTheme({
  components: {

    MuiButtonBase: {
      defaultProps: {
        sx: {
          ":disabled": {
            fontFamily: 'Inter',
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
  typography: {
    fontFamily: 'Inter',
    caption: {
              color: '#000000',
              fontSize: '40px',
              fontWeight: '700',
              lineHeight: 1.5,
            },

  },
  
})

const lightTheme = createTheme({
  ...appTheme,
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
        color: '#2e2e2e',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: 'normal',
        textTransform: 'none',
        whiteSpace:'wrap'
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
  ...appTheme,
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
      color: '#ffffff',
      fontSize: 40,
      fontWeight: 'normal',
      letterSpacing: '1px',
    },
    overline: {
      color: '#ffffff',
      textTransform: 'none',
      fontSize: '16px',
      fontWeight: 600,
    },
    subtitle1: {
      color: '#ffffff',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: 'normal',
      letterSpacing: '-0.456px',
      textTransform: 'none',
    },
    subtitle2: {
        color: '#ffffff',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: 'normal',
        textTransform: 'none',
        whiteSpace:'wrap'
       
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
export default appTheme;
