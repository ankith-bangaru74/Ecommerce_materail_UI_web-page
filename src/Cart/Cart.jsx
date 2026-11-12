import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Cart.styles.scss";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems } = useContext(AppContext);
 const navigate = useNavigate();

 

  const totalAmout = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0,
  );



 const handleCheckout = () => {
  
    navigate('/checkout')
     alert("proceeding to checkout!");
 }

  return (
    <div className="accordion-row">
      {cartItems.map((item) => (
        <Accordion key={item.id} className="accordion-page">
          <AccordionSummary
            className="accordion-summary"
           
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className="item-name">{item.name}

            </Typography>
            
            <Typography  className="item-price">{`${item.price} $`}</Typography>
          </AccordionSummary>
          <AccordionDetails className="accordion-info">
            <img
              className="accordion-img"
              src={item.image}
              alt={item.name}
              width={250}
            />
            <Typography>{item.description}</Typography>
            <Typography>Price: {item.price}$</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Box className="cart-summery">
        <Typography variant="h6">Total Amount: ₹{totalAmout}</Typography>
       
        <Button variant="contained" onClick={handleCheckout}>
         checkout
        </Button>
      </Box>
    </div>
  );
}

export default Cart;
