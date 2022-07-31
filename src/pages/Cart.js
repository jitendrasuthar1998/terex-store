import React from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { Grid } from '@mui/material'
import { removeFromCart } from '../redux/actions'
import ItemCard from '../components/ItemCard'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <Header />
      <b>
        Total cart items are : {cartItems.length}
      </b>


      <Grid container md={8} display={'flex'} justifyContent="center" alignItems={'center'}>

        {
          cartItems.map((item) => (
            <ItemCard item={item} key={item.name} handleRemoveFromCart={removeFromCart} cartItems={cartItems}/>
          ))
        }
        {
          cartItems.length === 0 && (
            <h3> Cart is Empty</h3>
          )
        }
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, {removeFromCart})(Cart);



