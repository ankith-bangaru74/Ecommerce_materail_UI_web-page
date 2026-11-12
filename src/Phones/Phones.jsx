  import React, { useContext, useState } from 'react'

  import { Card , CircularProgress, Typography,CardMedia,CardContent,CardActions , Chip, Rating, Button, Pagination} from '@mui/material';
  import './Phones.style.scss'
import { AppContext } from '../Context/AppContext';
  function Phones() {
    const { cartItems , setCartItems } = useContext(AppContext)

    const phones = [
    {
      id: 1,
      name: "Samsung Galaxy S25 Ultra",
      image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s25-ultra-sm-s938-1.jpg",
      description: "Samsung flagship with advanced cameras and Galaxy AI",
      price: 1199,
      rating: 4
    },
    {
      id: 2,
      name: "iPhone 16 Pro Max",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
      description: "Apple flagship with A18 Pro chip and advanced cameras",
      price: 1099,
      rating: 4
    },
    {
      id: 3,
      name: "OnePlus 13",
      image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg",
      description: "Premium OnePlus phone with powerful performance",
      price: 899,
      rating: 4
    },
    {
      id: 4,
      name: "Google Pixel 9 Pro XL",
      image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-pro-xl-1.jpg",
      description: "Google flagship with excellent photography and AI features",
      price: 1099,
      rating: 4
    },
    {
      id: 5,
      name: "Xiaomi 15",
      image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15.jpg",
      description: "Compact flagship with powerful performance",
      price: 899,
      rating: 4
    },
    {
      id: 6,
      name: "Samsung Galaxy Z Fold6",
      image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg",
      description: "Foldable flagship with a large inner display",
      price: 1699,
      rating: 4
    },
    {
      id: 7,
      name: "iPhone 16",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
      description: "Apple smartphone with A18 performance",
      price: 799,
      rating: 4
    },
    {
      id: 8,
      name: "Nothing Phone 3",
      image: "https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-3-new.jpg",
      description: "Distinctive design with Glyph features",
      price: 799,
      rating: 4
    },
    {
      id: 9,
      name: "OnePlus 12",
      image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
      description: "Flagship phone with a high-resolution display",
      price: 799,
      rating: 4
    },
    {
      id: 10,
      name: "Vivo X200 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg",
      description: "Camera-focused flagship with powerful zoom",
      price: 1099,
      rating: 4
    },
    {
      id: 11,
      name: "Samsung Galaxy S24 Ultra",
      image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
      description: "Samsung flagship with S Pen support",
      price: 1199,
      rating: 4
    },
    {
      id: 12,
      name: "iPhone 15 Pro Max",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
      description: "Apple flagship with titanium design",
      price: 1199,
      rating: 4
    },
    {
      id: 13,
      name: "Google Pixel 9",
      image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-9-1.jpg",
      description: "Google smartphone with intelligent camera features",
      price: 799,
      rating: 4
    },
    {
      id: 14,
      name: "Nothing Phone 2",
      image: "https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2_.jpg",
      description: "Stylish smartphone with Glyph interface",
      price: 699,
      rating: 4
    },
    {
      id: 15,
      name: "OnePlus 12R",
      image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12r.jpg",
      description: "Performance-focused phone with a smooth display",
      price: 499,
      rating: 4
    },
    {
      id: 16,
      name: "Samsung Galaxy A55",
      image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
      description: "Samsung mid-range phone with a premium finish",
      price: 449,
      rating: 4
    },
    {
      id: 17,
      name: "iPhone 15",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
      description: "Apple smartphone with Dynamic Island",
      price: 799,
      rating: 4
    },
    {
      id: 18,
      name: "Google Pixel 8a",
      image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8a.jpg",
      description: "Affordable Pixel phone with smart photography",
      price: 499,
      rating: 4
    },
    {
      id: 19,
      name: "Redmi Note 14 Pro+",
      image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-plus-5g.jpg",
      description: "Redmi phone with a high-resolution camera",
      price: 399,
      rating: 4
    },
    {
      id: 20,
      name: "POCO F6 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg",
      description: "Powerful POCO phone for gaming",
      price: 499,
      rating: 4
    },
    {
      id: 21,
      name: "Redmi Note 13 Pro+",
      image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-plus.jpg",
      description: "Redmi smartphone with fast charging",
      price: 399,
      rating: 4
    },
    {
      id: 22,
      name: "POCO X6 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-pro.jpg",
      description: "Gaming-focused phone with strong performance",
      price: 299,
      rating: 4
    },
    {
      id: 23,
      name: "Realme GT 6",
      image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-gt6-1.jpg",
      description: "Realme performance phone with a premium display",
      price: 599,
      rating: 4
    },
    {
      id: 24,
      name: "Vivo V40 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-v40-pro.jpg",
      description: "Vivo smartphone with portrait photography features",
      price: 599,
      rating: 4
    },
    {
      id: 25,
      name: "OPPO Reno 12 Pro",
      image: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno12-pro-cn-1.jpg",
      description: "OPPO phone with portrait camera features",
      price: 599,
      rating: 4
    },
    {
      id: 26,
      name: "Motorola Edge 50 Ultra",
      image: "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-ultra.jpg",
      description: "Motorola flagship with a premium design",
      price: 999,
      rating: 4
    },
    {
      id: 27,
      name: "Honor 200 Pro",
      image: "https://fdn2.gsmarena.com/vv/pics/honor/honor-200-pro-1.jpg",
      description: "Honor phone with portrait photography technology",
      price: 699,
      rating: 4
    },
    {
      id: 28,
      name: "Infinix Note 40 Pro+",
      image: "https://fdn2.gsmarena.com/vv/pics/infinix/infinix-note-40-pro-plus-5g-2.jpg",
      description: "Infinix smartphone with fast charging features",
      price: 349,
      rating: 4
    },
    {
      id: 29,
      name: "Tecno Camon 30 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30-pro.jpg",
      description: "Tecno smartphone designed for photography",
      price: 299,
      rating: 4
    },
    {
      id: 30,
      name: "iQOO 12",
      image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-iqoo12-10.jpg",
      description: "Powerful iQOO phone for gaming and multitasking",
      price: 699,
      rating: 4
    },
    {
      id: 31,
      name: "Samsung Galaxy S23 Ultra",
      image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
      description: "Samsung flagship with an advanced camera system",
      price: 1199,
      rating: 4
    },
    {
      id: 32,
      name: "iPhone 14 Pro Max",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
      description: "Apple phone with a powerful processor and Pro cameras",
      price: 1099,
      rating: 4
    },
    {
      id: 33,
      name: "OnePlus 11",
      image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-11.jpg",
      description: "OnePlus flagship with fast performance",
      price: 699,
      rating: 4
    },
    {
      id: 34,
      name: "Google Pixel 8 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
      description: "Google flagship with advanced photography",
      price: 999,
      rating: 4
    },
    {
      id: 35,
      name: "Vivo X100 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
      description: "Vivo flagship with professional camera features",
      price: 999,
      rating: 4
    },
    {
      id: 36,
      name: "OPPO Find X7 Ultra",
      image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7-ultra.jpg",
      description: "OPPO flagship with an advanced multi-camera system",
      price: 1199,
      rating: 4
    },
    {
      id: 37,
      name: "Xiaomi 14 Ultra",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-ultra-1.jpg",
      description: "Xiaomi flagship built for photography enthusiasts",
      price: 999,
      rating: 4
    },
    {
      id: 38,
      name: "Samsung Galaxy Z Flip5",
      image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-flip5-5g.jpg",
      description: "Compact foldable Samsung smartphone",
      price: 999,
      rating: 4
    },
    {
      id: 39,
      name: "Motorola Edge 50 Pro",
      image: "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
      description: "Motorola phone with a curved display",
      price: 699,
      rating: 4
    },
    {
      id: 40,
      name: "Realme 13 Pro+",
      image: "https://fdn2.gsmarena.com/vv/bigpic/realme-13-pro-plus.jpg",
      description: "Realme phone with a high-resolution portrait camera",
      price: 499,
      rating: 4
    }
  ]

const [page, setPage ] = useState(1)

const itemPerPage = 20

const totalPages = Math.ceil(phones.length / itemPerPage)

const startIndex = (page - 1) * itemPerPage

const currentPhones = phones.slice(
  startIndex,
  startIndex + itemPerPage
) 
const [loading , setLoading ] = useState(false)

const handleAddToCart = (phone) => {
  setCartItems((prev) => [...prev,phone]);
  alert(`${phone.name} Added to Cart`)
}

const handlePageChange = (event,value) => {
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
          <div className='loader-phone'>
            <CircularProgress size={55} />
          </div>
        ) : (
        
        <div className='phone-grid'>
          {currentPhones.map((phone) => (
            <Card key={phone.id} className='phone-body'>
                <CardMedia 
                src={phone.image}
                component='img'
                className='mobile-img'
                alt={phone.name}
                />  
                
                <Chip 
                label={phone.name}
                className='mobile-chip'
                color='secondary'
                />

                <CardContent>
                  <Typography>
                    {phone.description}
                  </Typography>
                  <Rating 
                  value={phone.rating}
                  />

                </CardContent>
                <CardActions className='btn-price'>
                  <Button variant='contained' onClick={() => handleAddToCart(phone)}  >
                    Buy Now
                  </Button>

                  <Typography className='mobile-price'>{phone.price}$</Typography>
                </CardActions>
            </Card>
          ))}

        </div>
        )}
        <Pagination 
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color='primary'
        shape='rounded'
        className='phones-pagination'
        />
      </div>
    )
  }

  export default Phones