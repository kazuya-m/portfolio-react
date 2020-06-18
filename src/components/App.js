import React from 'react';
import Header from './Header';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

class App extends React.Component{
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: teal[500]
        },
        secondary: {
          main: "#00bcd4"
        }
      }
    });
    
    return (
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
  }
}

export default App;