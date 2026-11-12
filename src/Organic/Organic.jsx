
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Pagination,
  Rating,
  Typography,
    CircularProgress
} from '@mui/material';

import {  useContext, useState } from 'react';
import './Organic.styles.scss';
import AppProvider, { AppContext } from '../Context/AppContext';

function Organic() {
const [loading ,setLoading ] = useState(false)
  const groceries = [
    {
      id: 1,
      name: "Basic Groceries",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery1.png",
      description: "A combo pack of everyday groceries for a family of four.",
      price: 25,
      rating: 4.5
    },
    {
      id: 2,
      name: "Milk Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery2.png",
      description: "A grocery combo with extra milk for your family.",
      price: 30,
      rating: 4.2
    },
    {
      id: 3,
      name: "Butter Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery3.png",
      description: "A grocery combo with extra butter for everyday use.",
      price: 18,
      rating: 4.0
    },
    {
      id: 4,
      name: "Fruit Jam Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery4.png",
      description: "A family grocery pack with delicious fruit jam.",
      price: 22,
      rating: 4.3
    },
    {
      id: 5,
      name: "Peanut Butter Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery5.png",
      description: "A grocery combo with peanut butter for breakfast.",
      price: 28,
      rating: 4.6
    },
    {
      id: 6,
      name: "Grains Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery6.png",
      description: "A selection of grains for healthy everyday meals.",
      price: 35,
      rating: 4.4
    },
    {
      id: 7,
      name: "Fish Oils",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery7.png",
      description: "A grocery pack with fish oil products.",
      price: 15,
      rating: 3.9
    },
    {
      id: 8,
      name: "Fresh Green Leaves Combo",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery8.png",
      description: "Fresh green leaves for healthy meals.",
      price: 12,
      rating: 4.1
    },
    {
      id: 9,
      name: "Christmas Celebration Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery9.png",
      description: "A special grocery combo for family celebrations.",
      price: 45,
      rating: 4.8
    },
    {
      id: 10,
      name: "Single Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery10.png",
      description: "A convenient grocery combo for one person.",
      price: 10,
      rating: 4.0
    },
    {
      id: 11,
      name: "Bachelor Special",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery11.png",
      description: "An affordable grocery combo for bachelors.",
      price: 20,
      rating: 4.3
    },
    {
      id: 12,
      name: "Kids Special",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery12.png",
      description: "A grocery combo with tasty products for kids.",
      price: 24,
      rating: 4.7
    },
    {
      id: 13,
      name: "Party Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery13.png",
      description: "A grocery combo for parties and celebrations.",
      price: 40,
      rating: 4.9
    },
    {
      id: 14,
      name: "Couple Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery1.png",
      description: "A grocery combo suitable for two people.",
      price: 16,
      rating: 4.2
    },
    {
      id: 15,
      name: "Organic Vegetables Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery2.png",
      description: "A selection of fresh vegetables for daily cooking.",
      price: 19,
      rating: 4.5
    },
    {
      id: 16,
      name: "Organic Fruits Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery3.png",
      description: "A healthy combination of fresh seasonal fruits.",
      price: 21,
      rating: 4.6
    },
    {
      id: 17,
      name: "Organic Rice Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery4.png",
      description: "Quality rice for everyday family meals.",
      price: 14,
      rating: 4.4
    },
    {
      id: 18,
      name: "Organic Pulses Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery5.png",
      description: "A selection of pulses for nutritious cooking.",
      price: 17,
      rating: 4.5
    },
    {
      id: 19,
      name: "Organic Nuts Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery6.png",
      description: "A mixed selection of nuts for healthy snacking.",
      price: 26,
      rating: 4.7
    },
    {
      id: 20,
      name: "Organic Breakfast Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery7.png",
      description: "Breakfast essentials for a healthy start to the day.",
      price: 23,
      rating: 4.4
    },
    {
      id: 21,
      name: "Organic Cooking Oil",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery8.png",
      description: "Cooking oil for your everyday kitchen needs.",
      price: 13,
      rating: 4.3
    },
    {
      id: 22,
      name: "Organic Spices Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery9.png",
      description: "A selection of aromatic spices for home cooking.",
      price: 11,
      rating: 4.5
    },
    {
      id: 23,
      name: "Organic Honey Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery10.png",
      description: "Natural honey for breakfast and beverages.",
      price: 18,
      rating: 4.7
    },
    {
      id: 24,
      name: "Organic Tea Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery11.png",
      description: "A refreshing tea selection for everyday use.",
      price: 12,
      rating: 4.3
    },
    {
      id: 25,
      name: "Organic Coffee Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery12.png",
      description: "Coffee essentials for your morning routine.",
      price: 20,
      rating: 4.6
    },
    {
      id: 26,
      name: "Organic Flour Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery13.png",
      description: "Everyday flour for fresh homemade meals.",
      price: 9,
      rating: 4.2
    },
    {
      id: 27,
      name: "Organic Cereal Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery1.png",
      description: "A nutritious cereal selection for breakfast.",
      price: 15,
      rating: 4.4
    },
    {
      id: 28,
      name: "Organic Snack Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery2.png",
      description: "A selection of snacks for the whole family.",
      price: 16,
      rating: 4.3
    },
    {
      id: 29,
      name: "Organic Dry Fruits Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery3.png",
      description: "A mixed dry fruit selection for healthy snacking.",
      price: 29,
      rating: 4.8
    },
    {
      id: 30,
      name: "Organic Salad Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery4.png",
      description: "Fresh ingredients for delicious homemade salads.",
      price: 14,
      rating: 4.4
    },
    {
      id: 31,
      name: "Organic Protein Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery5.png",
      description: "A selection of protein-rich grocery essentials.",
      price: 32,
      rating: 4.6
    },
    {
      id: 32,
      name: "Organic Family Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery6.png",
      description: "A large grocery combo for family requirements.",
      price: 50,
      rating: 4.7
    },
    {
      id: 33,
      name: "Organic Juice Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery7.png",
      description: "A selection of refreshing fruit juices.",
      price: 18,
      rating: 4.3
    },
    {
      id: 34,
      name: "Organic Dairy Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery8.png",
      description: "Dairy essentials for your everyday meals.",
      price: 24,
      rating: 4.5
    },
    {
      id: 35,
      name: "Organic Weekend Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery9.png",
      description: "A grocery combo for your weekend cooking.",
      price: 36,
      rating: 4.6
    },
    {
      id: 36,
      name: "Organic Mini Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery10.png",
      description: "A small grocery combo for everyday essentials.",
      price: 12,
      rating: 4.1
    },
    {
      id: 37,
      name: "Organic Healthy Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery11.png",
      description: "A combination of healthy grocery essentials.",
      price: 27,
      rating: 4.7
    },
    {
      id: 38,
      name: "Organic Premium Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery12.png",
      description: "A premium selection of grocery products.",
      price: 42,
      rating: 4.8
    },
    {
      id: 39,
      name: "Organic Kitchen Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery13.png",
      description: "Kitchen essentials for everyday cooking.",
      price: 31,
      rating: 4.5
    },
    {
      id: 40,
      name: "Organic Mega Pack",
      image: "https://shop1-5abc3.web.app/assets/images/groceries/grocery1.png",
      description: "A complete grocery combo for the entire family.",
      price: 55,
      rating: 4.9
    }
  ];
  const {cartItems , setCartItems } = useContext(AppContext)
const handleAddToCart = (grocery) => {
 setCartItems((prev) => [...prev,grocery])
  alert(`${grocery.name} added to Cart`)
}

  const [page , setPage ] = useState(1)

  const itemPerPage = 20

  const totalPages = Math.ceil(groceries.length / itemPerPage)

  const startIndex = (page - 1) * itemPerPage

  const currentGroceries = groceries.slice(
    startIndex,
    startIndex + itemPerPage
  )
  const handlePageChange = (event, value) => {
    setLoading(true)

    setTimeout(() => {
      setPage(value)
      setLoading(false)
      
      window.scrollTo({
       top:0,
        behavior:'smooth'
      })

    },500)
  }
  return (
    <div>
      {loading ? (
        <div className='loader-grocery'>
          <CircularProgress size={55} />
        </div>
 
      ) : (
    <div className='grocery-main'>

      {currentGroceries.map((grocery) => (
        <div key={grocery.id} className='grocery-body'>

          <CardMedia
            component='img'
            src={grocery.image}
            alt={grocery.name}
            className='grocery-img'
          />

          <Chip
            label={grocery.name}
            color='secondary'
            className='grocery-chip'
          />

          <CardContent>
            <Typography>
              {grocery.description}
            </Typography>

            <Rating
              value={grocery.rating}
              precision={0.1}
              readOnly
            />
          </CardContent>

          <CardActions>
            <Button variant='contained' onClick={ () =>handleAddToCart(grocery)}>
              Buy Now
            </Button>

            <Typography className='grocery-price'>
              ${grocery.price.toLocaleString('en-US')}
            </Typography>
          </CardActions>

        </div>
      ))}
    </div>
     )}

    <Pagination 
    count={totalPages}
    page={page}
    onChange={handlePageChange}
    color='primary'
    shape='rounded'
    className='groceries-pagination'
    />
    </div>
    
  );
}

export default Organic;
