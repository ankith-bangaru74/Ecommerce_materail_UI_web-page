import { Button, CardActions,Card, CardContent, CircularProgress, CardMedia, Chip, Rating, Typography,Pagination } from '@mui/material';
import './Laptops.styles.scss'
import {  useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';

function Laptops() {
  const laptops = [
  {
    id: 1,
    name: "Dell Inspiron 5999",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop1.png",
    description: "A good and durable model for daily use with a long-lasting battery, efficient power consumption, and heat channeling technology.",
    price: 450,
    rating: 4.3
  },
  {
    id: 2,
    name: "Dell Thinkpad",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop2.png",
    description: "This model is made for handy college use with the required hardware for all the programming needs of a student.",
    price: 550,
    rating: 4.5
  },
  {
    id: 3,
    name: "Lenovo Specter",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop3.png",
    description: "Designed especially for professional office use, with a lightweight ergonomic design and flexible work applications.",
    price: 700,
    rating: 4.4
  },
  {
    id: 4,
    name: "Dell Inspiron 7999",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop4.png",
    description: "A higher-end version of the Dell 5000 series, efficient for heavy tasks and high processor usage while consuming less energy.",
    price: 950,
    rating: 4.8
  },
  {
    id: 5,
    name: "Dell Inspiron 3550",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop5.png",
    description: "A good and durable model for daily use with a long-lasting battery, efficient power consumption, and heat channeling technology.",
    price: 400,
    rating: 4.1
  },
  {
    id: 6,
    name: "Chrome Book",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop6.png",
    description: "Designed for professional office use, with a lightweight ergonomic design and flexible work applications.",
    price: 350,
    rating: 4.0
  },
  {
    id: 7,
    name: "HP Pavilion",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop7.png",
    description: "Made for convenient college use, with the required hardware for programming and student needs.",
    price: 600,
    rating: 4.3
  },
  {
    id: 8,
    name: "Asus ROG",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop8.png",
    description: "A top-end model with a high configuration and advanced performance management for uninterrupted gaming sessions.",
    price: 1400,
    rating: 4.9
  },
  {
    id: 9,
    name: "Dell Latitude",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop9.png",
    description: "A durable model for daily use with a long-lasting battery, efficient power consumption, and heat channeling technology.",
    price: 750,
    rating: 4.5
  },
  {
    id: 10,
    name: "Chrome Book Pro",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop10.png",
    description: "Designed for professional office use, with a lightweight ergonomic design and flexible work applications.",
    price: 500,
    rating: 4.2
  },
  {
    id: 11,
    name: "Lenovo Specter X-Pro",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop11.png",
    description: "Made for convenient college use, with the required hardware for programming and student needs.",
    price: 850,
    rating: 4.6
  },
  {
    id: 12,
    name: "Asus ROG S",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop12.png",
    description: "A top-end model with a high configuration and advanced performance management for uninterrupted gaming sessions.",
    price: 1600,
    rating: 4.9
  },
  {
    id: 13,
    name: "Ultra-Book",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop13.png",
    description: "A higher-end model efficient for heavy tasks and high processor usage while consuming less energy.",
    price: 1100,
    rating: 4.7
  },
  {
    id: 14,
    name: "Chrome Book",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop6.png",
    description: "Designed for professional office use, with a lightweight ergonomic design and flexible work applications.",
    price: 380,
    rating: 4.1
  },
  {
    id: 15,
    name: "HP Pavilion",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop7.png",
    description: "Made for convenient college use, with the required hardware for programming and student needs.",
    price: 620,
    rating: 4.4
  },
  {
    id: 16,
    name: "Asus ROG",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop8.png",
    description: "A top-end model with a high configuration and advanced performance management for uninterrupted gaming sessions.",
    price: 1450,
    rating: 4.8
  },
  {
    id: 17,
    name: "Dell Latitude",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop9.png",
    description: "A durable model for daily use with a long-lasting battery, efficient power consumption, and heat channeling technology.",
    price: 780,
    rating: 4.5
  },

  {
    id: 18,
    name: "HP EliteBook",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop7.png",
    description: "A powerful business laptop designed for multitasking, office work, and everyday productivity.",
    price: 900,
    rating: 4.5
  },
  {
    id: 19,
    name: "Lenovo IdeaPad",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop3.png",
    description: "A lightweight laptop suitable for students, browsing, and daily computing.",
    price: 650,
    rating: 4.3
  },
  {
    id: 20,
    name: "Asus VivoBook",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop8.png",
    description: "A stylish laptop offering reliable performance for work and entertainment.",
    price: 750,
    rating: 4.4
  },
  {
    id: 21,
    name: "Acer Aspire 5",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop5.png",
    description: "A versatile laptop for everyday tasks, study, and productivity.",
    price: 700,
    rating: 4.2
  },
  {
    id: 22,
    name: "Dell Vostro",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop1.png",
    description: "A practical laptop designed for business users and office applications.",
    price: 850,
    rating: 4.5
  },
  {
    id: 23,
    name: "MSI Gaming Laptop",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop8.png",
    description: "A gaming-focused laptop designed for demanding applications and entertainment.",
    price: 1500,
    rating: 4.8
  },
  {
    id: 24,
    name: "Acer Nitro",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop4.png",
    description: "A performance-oriented laptop for gaming and heavy workloads.",
    price: 1350,
    rating: 4.7
  },
  {
    id: 25,
    name: "Lenovo ThinkPad E14",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop2.png",
    description: "A durable laptop suitable for business, programming, and office work.",
    price: 1000,
    rating: 4.6
  },
  {
    id: 26,
    name: "HP Envy",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop7.png",
    description: "A premium laptop with a sleek design for creative work and productivity.",
    price: 1250,
    rating: 4.7
  },
  {
    id: 27,
    name: "Dell XPS",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop9.png",
    description: "A premium laptop built for professional tasks and multitasking.",
    price: 1600,
    rating: 4.9
  },
  {
    id: 28,
    name: "Asus ZenBook",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop3.png",
    description: "A slim and portable laptop designed for professionals and students.",
    price: 1150,
    rating: 4.6
  },
  {
    id: 29,
    name: "Samsung Galaxy Book",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop6.png",
    description: "A modern laptop for everyday productivity and entertainment.",
    price: 1050,
    rating: 4.5
  },
  {
    id: 30,
    name: "Acer Swift",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop5.png",
    description: "A lightweight laptop designed for travel, study, and everyday use.",
    price: 950,
    rating: 4.4
  },
  {
    id: 31,
    name: "HP ProBook",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop7.png",
    description: "A business laptop for office productivity and professional applications.",
    price: 980,
    rating: 4.5
  },
  {
    id: 32,
    name: "Lenovo Legion",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop8.png",
    description: "A high-performance gaming laptop for demanding games and applications.",
    price: 1700,
    rating: 4.9
  },
  {
    id: 33,
    name: "MSI Modern 15",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop2.png",
    description: "A practical laptop for office work, education, and everyday multitasking.",
    price: 890,
    rating: 4.3
  },
  {
    id: 34,
    name: "Dell Precision",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop1.png",
    description: "A workstation laptop designed for professional and technical workloads.",
    price: 1800,
    rating: 4.8
  },
  {
    id: 35,
    name: "Asus TUF Gaming",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop4.png",
    description: "A durable gaming laptop designed for long gaming and work sessions.",
    price: 1450,
    rating: 4.7
  },
  {
    id: 36,
    name: "HP Chromebook",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop6.png",
    description: "A simple laptop for browsing, online learning, and everyday tasks.",
    price: 450,
    rating: 4.1
  },
  {
    id: 37,
    name: "Lenovo Yoga",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop3.png",
    description: "A flexible laptop designed for productivity and creative work.",
    price: 1300,
    rating: 4.7
  },
  {
    id: 38,
    name: "Acer Predator",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop8.png",
    description: "A powerful gaming laptop designed for demanding games and applications.",
    price: 1750,
    rating: 4.9
  },
  {
    id: 39,
    name: "Dell Latitude 7440",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop9.png",
    description: "A business laptop with a portable design for professional productivity.",
    price: 1200,
    rating: 4.6
  },
  {
    id: 40,
    name: "Microsoft Surface Laptop",
    image: "https://shop1-5abc3.web.app/assets/images/laptop/laptop10.png",
    description: "A premium laptop for productivity, browsing, and everyday computing.",
    price: 1550,
    rating: 4.8
  }

];
const [loading , setLoading ] = useState()
 const [page, setPage ] = useState(1)

const itemsPerPage = 20

const totalPages = Math.ceil(laptops.length / itemsPerPage)

const startIndex  = (page - 1) * itemsPerPage;

const currentLaptops = laptops.slice(
  startIndex,
  startIndex + itemsPerPage
)

const handlePageChange = (event, value) => {
  setLoading(true)

  setTimeout(() => {
    setLoading(false)
    setPage(value)
       
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
     
  }, 500)
}
const {setCartItems } = useContext(AppContext)

  const handleAddToCart = (laptop) => {
    setCartItems((prev) => [...prev,laptop])
    alert(`${laptop.name} added to Cart`)

  } 

  return (
    <div>
      {loading ? (
        <div className='loader-laptop'>
          <CircularProgress size={55} />
        </div>
      ) : (
    
    <div className='laptops-main'>
      {currentLaptops.map((laptop) => (
        <Card className='laptops-body' key={laptop.id}>
            <CardMedia 
            component='img'
            className='laptops-img'
            src={laptop.image}
            alt={laptop.name}
            />
            <Chip 
            label={laptop.name}
            className='laptops-Chip'
            color='secondary'
            />
            <CardContent>
              <Typography>
                {laptop.description}
              </Typography>
              <Rating 
              value={laptop.rating}
              
              />

            </CardContent>
       <CardActions>
            <Button variant='contained' onClick={() => handleAddToCart(laptop)} >
              Buy Now
            </Button>
            <Typography className='laptop-price'>
              {laptop.price}
            </Typography>
            </CardActions>
        </Card>
        
      ))}
     
    </div>
      )}
    <Pagination 
    count={totalPages}
    page={page}
    onChange={handlePageChange}
    color='priamry'
    shape='rouded'
    className='laptop-pagination'
    />
    </div>
  )
}

export default Laptops