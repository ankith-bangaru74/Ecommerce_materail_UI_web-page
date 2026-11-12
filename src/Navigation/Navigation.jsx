
import './Navigation.styles.scss'
import { Link } from 'react-router-dom'
import {ShoppingCart } from 'lucide-react'
import {Button , Badge} from '@mui/material'
import { AppContext } from '../Context/AppContext'
import { useContext } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function Navigation() {
  const {cartItems  } = useContext(AppContext)
  return (
    <div className='nav-bar'>
        <div >
            <span><Link to='/' className='nav-brand'><ShoppingBagIcon />  Shopping</Link></span>
        </div>
        <div className='nav-links'>
         <Button component={Link} to='/cart' >
         <span className='cart-text'  >this is Cart <ChevronRightIcon /> </span>
           <Badge badgeContent={cartItems.length} color='secondary' >
           <ShoppingCart size={24} />
          </Badge>
          </Button>
         
        </div>

    </div>
  )
}

export default Navigation