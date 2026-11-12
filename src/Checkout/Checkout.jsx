import React, { useState } from 'react'
import { Stepper, Step,StepLabel,Button,Box,Typography, TextField } from '@mui/material'
import './Checkout.styles.scss'
import { QRCodeSVG } from 'qrcode.react';
function Checkout() {
    const steps = [
        
            'Shipping Address',
            'Payment method',
            'review Order'

        
    ];
    const [activeStep , setActiveStep ] = useState(0)
  return (
    <div>
     <Box className='checkout-main'>
   <Stepper className='payments' activeStep={activeStep}>
     {steps.map((step) => (
        <Step key={step}>
            <StepLabel>{step}</StepLabel>
        </Step>
     ))}
   </Stepper>
<Box>
   {activeStep === 0 && (
    <>
    <div className='profile'>
    <TextField 
    label='UserName'
    variant='standard'
    required
    />
    <TextField 
    label='Password'
    variant='standard'
    required
    />
    <TextField 
    label='Email'
    variant='standard'
    required
    />
    </div>
    </>

   
   )}
 {activeStep === 1 && (
        <>
         <div className='payment-qr'>
          
          <Typography variant='h6'>
                Scan & Pay using UPI
          </Typography>

          <QRCodeSVG  
          
          value="upi://pay?pa=demo@upi&pn=DemoStore&am=100&cu=INR"
          size={200}
          />
         
         <Typography>
             Scan using Google Pay, PhonePe or Paytm
         </Typography>
         </div>
        </>
    )}
    {activeStep === 2 && (
        <>
        <Typography variant='h5'>
            Review Your Order
        </Typography>

        <Typography>
            Please confirm your shipping and payment details.
        </Typography>
        </>
    )}
          {activeStep === 3 && (
            <>
            <Typography>
               You'r Order is confrimed 
            </Typography>
            <Typography>
                Congrats `_`
            </Typography>
            </>
          )}
</Box>

     </Box>
     <Box className='checkout-btn'>
        <Button 
        variant='contained'
        disabled={activeStep === 0}
        onClick={() => setActiveStep((prev) => prev - 1 )}
        >
        Back
        </Button>
        <Button variant='contained' 
        onClick={() => setActiveStep((prev) => prev + 1)}
        disabled={activeStep === steps.length - 1}
        > 
         next
        </Button>
     </Box>
    </div>
  )
}

export default Checkout