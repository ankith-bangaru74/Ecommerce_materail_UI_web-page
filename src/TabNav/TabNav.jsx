import React, { useEffect, useState } from 'react'
import { Tab, Tabs ,CircularProgress ,Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import './TabNav.styles.scss'
function TabNav() {
  const [active , setActive ] = useState('organic')
  const location = useLocation()
  const navigate = useNavigate()
  const [loading ,setLoading ] = useState(false)
  useEffect(() => {
const category = (location.hash || '').replace('#' , '')

if(['organic','mobile','laptop'].includes(category)) {
  setActive(category)
}
  }, [location.hash])

  const handleChange = (event , newValue) => {
    setActive(newValue)
    setLoading(true)
    setTimeout(() => {
    navigate(`#${newValue}`)
    setLoading(false)
    }, 500)
  }
  
 

  return (
    
    <div className="tab-nav">
       {loading && (
    <Box className='loader-overlay' >
      
      <CircularProgress size={55} />
    </Box>
  )}
       <Tabs 
       value={active}
       onChange={handleChange}
       centered
       >
        <Tab label='Organic' value='organic' />
        <Tab label='mobiles' value='mobile' />
        <Tab label='laptop' value='laptop' />
       </Tabs>
    </div>
  )
}

export default TabNav