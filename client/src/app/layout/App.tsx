  
import { useEffect, useState } from "react" 
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./navbar"


function App() {
  const [products, setProducts] = useState<Product[]>([]);
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

  useEffect(() => {
    fetch('https://localhost:5042/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

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
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
