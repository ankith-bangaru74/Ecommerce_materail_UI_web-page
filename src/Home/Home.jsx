import React from 'react'
import './Home.styles.scss'
import { CardMedia, Typography,Chip } from '@mui/material'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <Typography variant='h5' className='home-title' >
           OFFER!!
        </Typography>
          <Link to='/category#organic'>
         
          <CardMedia 
          component='img'
          image='https://shop1-5abc3.web.app/assets/images/offer/offer1.jpg'
          alt='groceries'
          className='groceries-img'
          />
          <Chip 
          label="10% off on all Groceries"
          className='groceries-chip'
          />
 </Link>
          <div className='homepage-imgs' >
           <Link to='/category#mobile' className='phone-card'>
                <CardMedia 
                component='img'
                image='https://shop1-5abc3.web.app/assets/images/offer/mob_offer.jpg'
                 className='phone-img'
                  />
                   <Chip 
                   label='30% off on all Mobiles'
                   className='phone-chip'
                   />
          </Link>
   <Link to='/category#laptop' className='laptop-card'>
               <CardMedia 
               component='img'
               image='https://shop1-5abc3.web.app/assets/images/offer/laptop_offer.jpg'
               className='laptop-img'
               />
               <Chip 
               label='Upto 5000rs cashback on Laptop purchases'
               className='laptop-chip'
               />
               </Link>
               <Link to='/category#mobile' className='headphone-card'>
               <CardMedia 
               image='https://shop1-5abc3.web.app/assets/images/offer/headset_offer.jpeg'
               component='img'
               className='headphone-img'
               />
                <Chip 
                label='Free accessories gift coupons'
                className='headphone-chip'
                />
                </Link>
          </div>
    </div>
  )
}

export default Home