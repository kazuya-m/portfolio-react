import React from 'react';
import Header from './Header';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";

class App extends React.Component{
  render() {
    const theme = createMuiTheme({  // #1
      palette: {
        primary: {
          light: '#ffff8b',
          main: '#ffee58',
          dark: '#c9bc1f',
          contrastText: '#000000',
        },
        secondary: {
          light: '#63a4ff',
          main: '#1976d2',
          dark: '#004ba0',
          contrastText: '#ffffff',
        },
      },
    });
    
    return (
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
  }
}

export default App;