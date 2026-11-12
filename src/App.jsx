
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import Sidebar from './Sidebar/Sidebar'
import Category from './Category/Category'
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout'
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo, useState } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {
  const [mode , setMode ] = useState('light')

  const theme  = useMemo(
    () => 
      createTheme ({
        palette:{
          mode:mode,
          primary: {
            main: mode === 'dark' ? '#ff9800' : '#0da5e6'
          },
          background: {
               default:mode === 'dark' ? '#303030': '#ffffff',
               paper:mode === 'dark' ? '#424242' : '#ffffff',
          },
          
        },
      }),
      [mode]
  )

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />

    <div className={`main-layout ${mode}-mode`}>
      <Sidebar mode={mode} setMode={setMode} />

    <div className='home-page'>
    <Navigation />
    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/category' element={<Category />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
    </div>
    </div>
    </ThemeProvider>
  )
}

export default App
