  
import { useState } from "react";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./navbar"
import { Outlet } from "react-router-dom";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'dark' ?  '#121212': '#eaeaea')
      }
    }
  })

  const toggleDarkMode = () => {
    setDarkMode( !darkMode );
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleDarkMode = {toggleDarkMode} darkMode = {darkMode} />
      <CssBaseline />
      <Box
      sx={{
        minHeight: '100vh',
        background: darkMode ? 'radial-gradient(circle, #1e3aba, #111B27)'
        : 'radial-gradient(circle, #baecf9, #f0f9ff)',
        py: 6
      }}>
        <Container maxWidth='xl' sx={{mt:8}}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
