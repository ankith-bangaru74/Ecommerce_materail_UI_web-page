    import React from 'react'
    import './category.styles.scss'
    import TabNav from '../TabNav/TabNav'
    import Organic from '../Organic/Organic'
    import Phones from '../Phones/Phones'
  import Laptops from '../Laptops/Laptops'
    import { useLocation } from 'react-router-dom'
    function Category() {
        const location = useLocation()
        const category = location.hash.replace('#' , '') 
    return (
        <>
        <TabNav />

        {category === 'organic' && <Organic />}
        {category === 'mobile' && <Phones />}
        {category === 'laptop' && <Laptops />} 
        </>
    )
    }

    export default Category