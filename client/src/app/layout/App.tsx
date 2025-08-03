import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";


function App() {
  const {darkMode} = useAppSelector(state => state.ui)
  const palleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'dark' ?  '#121212': '#eaeaea')
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
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
